import { useTranslation } from 'next-i18next';
import * as yup from 'yup';

export const Schema = () => {
  const { t } = useTranslation('common');
  return yup
    .object({
      name: yup
        .string()
        .trim()
        .required(t('required'))
        .min(2, t('nameMin'))
        .max(100, t('nameMax'))
        .matches(
          /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ]+(([ʼ’'` -][а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ ])?[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ]*)*$/,
          t('name'),
        ),
      phone: yup.string().trim().required(t('required')),
      email: yup
        .string()
        .email(t('email'))
        .required(t('required'))
        .max(63, t('emailMax'))
        .matches(
          // eslint-disable-next-line no-control-regex
          /(?!-)^(?:[aA-zZ0-9_-]+(?:\.[aA-zZ0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
          t('email'),
        ),
      message: yup
        .string()
        .trim()
        .required(t('required'))
        .min(20, t('messageMin'))
        .max(2000, t('messageMax')),
    })
    .required();
};
