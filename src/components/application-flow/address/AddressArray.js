export const addressSelection = [
  'A 287 sushant lol 2, near navkirti market, Sector 55, Gurugram, Haryana 122003',
  '1789, NR HUDA Park, Sector 57, Wazirabad, Gurugram, Haryana 122003',
  'A-1/18, Golf Course Road, Huda, Sushant Lok 2, Sector 55, Gurugram, Haryana 122003',
  ' C-71, Sushant Lok 2, Sector 56, Gurugram, Haryana 122011'
]

export const utility = [
  'The photo is not blury',
  'All the details are clearly visible',
  'It should not be black and white',
  ' It should be photo of the Original Document and a photo of photocopy'
]

export const addressProof = {
  'Latest utility bill': [
    'Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG / Water bill',
    'The bill should be from last 2 months'
  ],
  'Bank statement': ['Bank passbook / cheque', 'The bill should be from last 2 months'],
  'Driving license': ['Driving license', 'The bill should be from last 2 months'],
  'Voter id card': ['Voter id card/Adhar card/Pan card', 'The bill should be from last 2 months'],
  'Rent aggrement + Latest utility bill': [
    'Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG / Water bill',
    'The bill should be from last 2 months'
  ],
  Passport: ['Passport / Visa', 'The bill should be from last 2 months'],
  'Letter of allotment of accommodation': [
    'Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG /',
    'The bill should be from last 2 month'
  ]
}

export const proofHeading = {
  UTILITY_BILL_FRONT: {
    text: 'Take a photo of Front Side of your Utility Bill not older than 2 months',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: true
    }
  },
  UTILITY_BILL_BACK: {
    text: 'Now, take a photo of Back Side of the same Utility Bill',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: true
    }
  },
  BANK_STATEMENT_FRONT: {
    text: 'Upload your Bank Statement of last 3 months',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  DRIVING_LICENCE_FRONT: {
    text: 'Take a photo of Front Side of your Driving licence',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  VOTER_ID_CARD_FRONT: {
    text: 'Take a photo of Front Side of your Voter ID card',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  VOTER_ID_CARD_BACK: {
    text: 'Take a photo of Front Side of your Voter ID card',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  RENT_AGREEMENT_FRONT: {
    text: 'Upload your rent agreement, Both parties’ name and addresses should be visible',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  PASSPORT_FRONT: {
    text: 'Take a photo of Front 2 pages of your Passport',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  PASSPORT_BACK: {
    text: 'Take a photo of Front 2 pages of your Passport',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  },
  ALLOTMENT_LETTER_FRONT: {
    text:
      'Upload your Accommodation Allotment Letter from the Government organization where you’re employed',
    upload: {
      heading: '',
      showCta: true,
      fileTypes: '.png,.jpeg,.jpg'
    },
    camera: {
      heading: 'Take a picture of your Voter ID(front)',
      showCta: false
    }
  }
}
