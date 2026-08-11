export const carrierLibPhones = [
  '843',
  '8430',
  '8451',
  '8452',
  '8455',
  '8456',
  '8458',
  '8459',
  '847',
  '8481',
  '8482',
  '8483',
  '8484',
  '8485',
  '8486',
  '8487',
  '8488',
  '8489',
  '8490',
  '8491',
  '8492',
  '8493',
  '8494',
  '8496',
  '8497',
  '8498',
  '84993',
  '84994',
  '84995',
  '84996',
  '84997',
  '84998',
  '84999',
];

export const geocodingLibPhones = [
  '84203',
  '84204',
  '84205',
  '84206',
  '84207',
  '84208',
  '84209',
  '84210',
  '84211',
  '84212',
  '84213',
  '84214',
  '84215',
  '84216',
  '84218',
  '84219',
  '84220',
  '84221',
  '84222',
  '84225',
  '84226',
  '84227',
  '84228',
  '84229',
  '84232',
  '84233',
  '84234',
  '84235',
  '84236',
  '84237',
  '84238',
  '84239',
  '8424',
  '84251',
  '84252',
  '84254',
  '84255',
  '84256',
  '84257',
  '84258',
  '84259',
  '84260',
  '84261',
  '84262',
  '84263',
  '84269',
  '84270',
  '84271',
  '84272',
  '84273',
  '84274',
  '84275',
  '84276',
  '84277',
  '8428',
  '84290',
  '84291',
  '84292',
  '84293',
  '84294',
  '84296',
  '84297',
  '84299',
];

export const getGoogleLibPhones = () => {
  const libPhones = [...carrierLibPhones, ...geocodingLibPhones];
  const phonesWithCode = libPhones.map((p) => `+${p}`);
  const phonesWithoutCode = libPhones.map((p) => `0${p.substring(2)}`);
  return [...phonesWithoutCode, ...libPhones, ...phonesWithCode];
};

export const getCarrierLibPhones = () => {
  const phonesWithCode = carrierLibPhones.map((p) => `+${p}`);
  const phonesWithoutCode = carrierLibPhones.map((p) => `0${p.substring(2)}`);
  return [...phonesWithoutCode, ...carrierLibPhones, ...phonesWithCode];
};

export const getGeocodingLibPhones = () => {
  const phonesWithCode = geocodingLibPhones.map((p) => `+${p}`);
  const phonesWithoutCode = geocodingLibPhones.map((p) => `0${p.substring(2)}`);
  return [...phonesWithoutCode, ...geocodingLibPhones, ...phonesWithCode];
};

export const checkValidPhoneByGoogleLib = (phoneNumber: string) => {
  // sdt theo nhà mạng
  const carrierPrefixNumber = getCarrierLibPhones().find((lp) =>
    phoneNumber?.includes(lp)
  );
  if (carrierPrefixNumber) {
    if (phoneNumber.startsWith('0')) return phoneNumber.length == 10;
    if (phoneNumber.startsWith('84')) return phoneNumber.length == 11;
    if (phoneNumber.startsWith('+84')) return phoneNumber.length == 12;
  }
  // sdt theo vị trí địa lý
  const geocodingPrefixNumber = getGeocodingLibPhones().find((lp) =>
    phoneNumber?.includes(lp)
  );
  if (geocodingPrefixNumber) {
    if (phoneNumber.startsWith('0')) return phoneNumber.length == 11;
    if (phoneNumber.startsWith('84')) return phoneNumber.length == 12;
    if (phoneNumber.startsWith('+84')) return phoneNumber.length == 13;
  }
  return false;
};
