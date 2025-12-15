'use client';
import { useState } from 'react';
import SuccessModal from '@/components/custom/successModal/page';
import MainButton from '@/components/ui/mainButton/page';


type PartnerApplicationFormProps = {
  onInteract?: () => void;
  onSubmit?: (data: any) => void;
};


export default function PartnerApplicationForm({ onInteract, onSubmit }: PartnerApplicationFormProps) {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    expectedReturn: '',
    loanAmount: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    expectedReturn: '',
    loanAmount: '',
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const newErrors = {
      name: form.name.trim() === '' ? 'Name is required.' : '',
      email: form.email.trim() === ''
        ? 'Email is required.'
        : !validateEmail(form.email)
        ? 'Invalid email format.'
        : '',
      phoneNumber: form.phoneNumber.trim() === ''
        ? 'Phone number is required.'
        : isNaN(Number(form.phoneNumber))
        ? 'Phone number must be numeric.'
        : '',
      expectedReturn: form.expectedReturn.trim() === ''
        ? 'Expected return is required.'
        : isNaN(Number(form.expectedReturn))
        ? 'Expected return must be numeric.'
        : parseFloat(form.expectedReturn) > 100
        ? 'Expected return cannot exceed 100%.'
        : '',
      loanAmount: form.loanAmount.trim() === ''
        ? 'Loan amount is required.'
        : isNaN(Number(form.loanAmount.replace(/,/g, '')))
        ? 'Loan amount must be numeric.'
        : '',
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => msg === '');
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const formattedForm = {
      ...form,
      loanAmount: Number(form.loanAmount.replace(/,/g, '')).toLocaleString('en-US'),
      expectedReturn: `${form.expectedReturn}%`,
    };

    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedForm),
      });

      if (!response.ok) throw new Error('Failed to send form');

      setForm({
        name: '',
        email: '',
        phoneNumber: '',
        expectedReturn: '',
        loanAmount: '',
      });

      setShowModal(true);

      if (onSubmit) onSubmit(formattedForm); // 🔥 trigger callback
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const handleInputChange = (field: keyof typeof form, value: string) => {
    if (['phoneNumber', 'loanAmount', 'expectedReturn'].includes(field)) {
      value = value.replace(/[^\d.]/g, '');
    }
    setForm({ ...form, [field]: value });

    if (onInteract) onInteract(); // 🔥 fires on typing

    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const inputClass = (field: keyof typeof form) =>
    `w-full border-b-2 px-2 py-2 h-11 bg-flp  outline-none transition-all duration-300 ${
      errors[field] ? 'border-red-500' : 'border-fp focus:border-gray-700'
    }`;


  const handleModalClose = () => {
    setShowModal(false);
    window.location.reload();
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="lg:mx-0 mx-auto p-6 rounded-md "
      >
        <h2 className="text-2xl font-bold text-fanakaPrimary mb-1">Become a partner</h2>
        <p className="text-sm text-fg mb-6">Want to become a debt partner? Fill the form below and we’ll get in touch!</p>

        {[{ label: 'Your Name or Organisation*', name: 'name', type: 'text' },
          { label: 'Email*', name: 'email', type: 'email' },
          { label: 'Phone number*', name: 'phoneNumber', type: 'tel' }].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block text-sm text-fg mb-1">{field.label}</label>
            <input
              onClick={onInteract}          // 🔥 new event
              onChange={(e) => {
                handleInputChange(field.name as keyof typeof form, e.target.value);
              }}
              type={field.type}
              name={field.name}
              value={form[field.name as keyof typeof form]}
              className={inputClass(field.name as keyof typeof form)}
            />
            {errors[field.name as keyof typeof form] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name as keyof typeof form]}</p>
            )}
          </div>
        ))}

        <div className="mb-4 relative">
          <label className="block text-sm text-fg mb-1">
            Potential percent return per annum expectation*
          </label>
          <div className="relative">
            <input
              onClick={onInteract}
              name="expectedReturn"
              type="text"
              inputMode="decimal"
              value={form.expectedReturn}
              onChange={(e) => handleInputChange('expectedReturn', e.target.value)}
              className={`${inputClass('expectedReturn')} pr-6`}
            />
            <span className="absolute right-2 top-2 text-fg pointer-events-none">%</span>
          </div>
          {errors.expectedReturn && (
            <p className="text-red-500 text-sm mt-1">{errors.expectedReturn}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm text-fg mb-1">
            How much are you lending as debt (USD)*
          </label>
          <input
            onClick={onInteract}
            name="loanAmount"
            type="text"
            inputMode="numeric"
            value={
              form.loanAmount
                ? Number(form.loanAmount.replace(/,/g, '')).toLocaleString('en-US')
                : ''
            }
            onChange={(e) => {
              const rawValue = e.target.value.replace(/,/g, '');
              if (!isNaN(Number(rawValue))) {
                handleInputChange('loanAmount', rawValue);
              }
            }}
            className={inputClass('loanAmount')}
          />
          {errors.loanAmount && (
            <p className="text-red-500 text-sm mt-1">{errors.loanAmount}</p>
          )}
        </div>

        <MainButton text="GET STARTED" 
        onClick={(e) => {
          e.preventDefault(); // prevent default link behavior
          handleSubmit();     // submit the form
        }} />

        <SuccessModal isOpen={showModal} onClose={handleModalClose} />
      </form>


    </>
  );
}
