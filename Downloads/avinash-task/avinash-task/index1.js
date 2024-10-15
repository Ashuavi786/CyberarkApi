import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function AccessRevocationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2>Access Revocation</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="revocation-form">
        
        {/* Security Code */}
        <div className="form-group">
          <label>Security Code</label>
          <input type="text" {...register('securityCode', { required: true })} />
          {errors.securityCode && <span className="error">Security Code is required</span>}
        </div>

        {/* Operation On */}
        <div className="form-group">
          <label>Operation On</label>
          <div>
            <input type="radio" value="OneAD" {...register('operation', { required: true })} /> OneAD
            <input type="radio" value="SQL" {...register('operation')} /> SQL
            <input type="radio" value="Oracle" {...register('operation')} /> Oracle
            <input type="radio" value="Unix" {...register('operation')} /> Unix
            <input type="radio" value="Windows" {...register('operation')} /> Windows
          </div>
          {errors.operation && <span className="error">Operation is required</span>}
        </div>

        {/* Select Action */}
        <div className="form-group">
          <label>Select Action</label>
          <select {...register('action', { required: true })}>
            <option value="">Select...</option>
            <option value="create">Create</option>
            <option value="delete">Delete</option>
            <option value="update">Update</option>
          </select>
          {errors.action && <span className="error">Action is required</span>}
        </div>

        {/* Business Justification */}
        <div className="form-group">
          <label>Business Justification</label>
          <input type="text" {...register('justification', { required: true })} />
          {errors.justification && <span className="error">Justification is required</span>}
        </div>

        {/* File Upload */}
        <div className="form-group">
          <label>Upload File</label>
          <input type="file" {...register('file', { required: true })} />
          {errors.file && <span className="error">File is required</span>}
        </div>

        {/* Submit Button */}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AccessRevocationForm;
