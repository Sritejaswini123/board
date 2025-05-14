import { NOT_FOUND } from "../constants/http-status-codes";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "../constants/http-status-phrases";
import BaseException from "./base-exception";

export default class NotFoundException extends BaseException {
  constructor(message?: string, errData?: any) {
    super(NOT_FOUND, message || NOT_FOUND_MESSAGE, NOT_FOUND_MESSAGE, true, errData);
  }
}
