import { validateForms } from '../functions/validate-forms';


const rulesModal = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Заполните имя',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email'
      }
    ]
  },
];

const rulesModalShort = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Заполните имя',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Заполните имя',
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя',
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон'
      }
    ]
  }
];

const afterForm = () => {
};

validateForms('.form--callback', rulesModal, afterForm);
validateForms('.form--modal', rulesModal, afterForm);
validateForms('.form--footer', rulesModalShort, afterForm);



