import React from 'react';
import './asap.css';

const Asap = ({ data }) => {
  return (
    <div className="asap-container">
      <p className="asap-field">Transaction ID: {data.txnId}</p>
      <p className="asap-field">Format: {data.format}</p>

      <div className="asap-subsection">
        <p className="asap-field">Registration Number: {data.certificateParameters.RegnNo}</p>
        <ul className="asap-list">
          {data.certificateParameters.CertificateType.split(",").map((type, index) => (
            <li key={index} className="asap-list-item">{type.trim()}</li>
          ))}
        </ul>
      </div>

      <div className="asap-subsection">
        <p className="asap-field">Consent ID: {data.consentArtifact.consent.consentId}</p>
        <p className="asap-field">Timestamp: {data.consentArtifact.consent.timestamp}</p>
        <p className="asap-field">Data Consumer ID: {data.consentArtifact.consent.dataConsumer.id}</p>
        <p className="asap-field">Data Provider ID: {data.consentArtifact.consent.dataProvider.id}</p>
        <p className="asap-field">Purpose: {data.consentArtifact.consent.purpose.description}</p>

        <div className="asap-subsection">
          <p className="asap-field">User ID Type: {data.consentArtifact.consent.user.idType}</p>
          <p className="asap-field">User ID Number: {data.consentArtifact.consent.user.idNumber}</p>
          <p className="asap-field">User Mobile: {data.consentArtifact.consent.user.mobile}</p>
          <p className="asap-field">User Email: {data.consentArtifact.consent.user.email}</p>
        </div>

        <p className="asap-field">Data: {data.consentArtifact.consent.data.id}</p>

        <div className="asap-subsection">
          <p className="asap-field">Access: {data.consentArtifact.consent.permission.access}</p>
          <p className="asap-field">Date Range: {data.consentArtifact.consent.permission.dateRange.from} to {data.consentArtifact.consent.permission.dateRange.to}</p>
          <p className="asap-field">Frequency: {data.consentArtifact.consent.permission.frequency.value} {data.consentArtifact.consent.permission.frequency.unit}, Repeats: {data.consentArtifact.consent.permission.frequency.repeats}</p>
        </div>
      </div>

      <p className="asap-field">Signature: {data.consentArtifact.signature.signature}</p>
    </div>
  );
};

export default Asap;
