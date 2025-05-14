import { UNPROCESSABLE_ENTITY } from "../constants/http-status-codes";
import { UNPROCESSABLE_ENTITY as UNPROCESSABLE_ENTITY_MESSAGE } from "../constants/http-status-phrases";
import BaseException from "./base-exception";
export default class UnprocessableEntityException extends BaseException {
  constructor(message?: string, errData?: any) {
    super(UNPROCESSABLE_ENTITY, message || UNPROCESSABLE_ENTITY_MESSAGE, UNPROCESSABLE_ENTITY_MESSAGE, true, errData);
  }
}
