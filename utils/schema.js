// import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as yup from 'yup';

export const Schema = () => {
  // const { t } = useTranslation();
  // const {
  //   required,
  //   name,
  //   nameMin,
  //   nameMax,
  //   email,
  //   emailMax,
  //   messageMin,
  //   messageMax,
  // } = t('formValidation', {
  //   returnObjects: true,
  // });
  return yup
    .object({
      name: yup
        .string()
        .trim()
        .required()
        .min(2)
        .max(100)
        .matches(
          /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ]+(([ʼ’'` -][а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ ])?[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄäÄöÖüÜßąĄćĆęĘłŁńŃóÓśŚźŹżŻ]*)*$/,
        ),
      phone: yup.string().trim().required(),
      email: yup
        .string()
        .email()
        .required()
        .max(63)
        .matches(
          // eslint-disable-next-line no-control-regex
          /(?!-)^(?:[aA-zZ0-9_-]+(?:\.[aA-zZ0-9_-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*"){3}@(?:(?:[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?\.)+[aA-zZ0-9](?:[aA-zZ0-9-]*[aA-zZ0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[aA-zZ0-9-]*[aA-zZ0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/g,
        ),
      message: yup.string().trim().required().min(20).max(2000),
    })
    .required();
};
