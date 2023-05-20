import * as yup from 'yup'

import { REGEX_EMAIL, REGEX_SPECIAL_CHARACTER, REGEX_UPPERCASE } from '@app/utils/regex'
import TEXT_FIELD from '@app/utils/message-error'

export const sigInSchema = yup.object().shape({
  email: yup
    .string()
    .required(TEXT_FIELD.EMAIL.TEXT_REQUIRED)
    .matches(REGEX_EMAIL, TEXT_FIELD.EMAIL.INVALID_EMAIL)
    .trim(),
  password: yup
    .string()
    .required(TEXT_FIELD.PASSWORD.TEXT_REQUIRED)
    .trim()
})

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required(TEXT_FIELD.NAME.TEXT_REQUIRED)
    .trim(),
  email: yup
    .string()
    .required(TEXT_FIELD.EMAIL.TEXT_REQUIRED)
    .matches(REGEX_EMAIL, TEXT_FIELD.EMAIL.INVALID_EMAIL)
    .trim(),
  password: yup
    .string()
    .required(TEXT_FIELD.PASSWORD.TEXT_REQUIRED)
    .min(8, TEXT_FIELD.PASSWORD.MIN)
    .matches(REGEX_UPPERCASE, TEXT_FIELD.PASSWORD.CAPITAL_LETTER)
    .matches(REGEX_SPECIAL_CHARACTER, TEXT_FIELD.PASSWORD.SPECIAL_CHARACTER)
    .trim()
})
