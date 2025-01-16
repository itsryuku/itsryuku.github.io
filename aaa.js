fetch('https://www.bwin.de/de/mobileportal/api/PersonalDetails', { credentials: 'include' })
  .then(res => res.json())
  .then(console.log);
