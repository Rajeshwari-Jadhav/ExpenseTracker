import React from 'react';

const DownloadTemplateButton = () => {
  const downloadTemplate = () => {
    const csvContent = 'userID,Date,Amount,Category,PayMethod,Provider\n';
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);

    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={downloadTemplate}>Download Template</button>
    </div>
  );
};

export default DownloadTemplateButton;
