import { ApplicationError } from "../protocols/protocols";

function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

function duplicatedAnimeError(anime) {
  return {
    name: "DuplicatedAnimeError",
    message: "There is already an anime with given name",
    anime,
  };
}

function notFoundError() {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function invalidDataError(details: string[]): ApplicationInvalidateDataError {
  return {
    name: 'InvalidDataError',
    message: 'Invalid data',
    details,
  };
}

type ApplicationInvalidateDataError = ApplicationError & {
  details: string[];
};

export default {
  conflictError,
  duplicatedAnimeError,  
  notFoundError,
  invalidDataError,  
};
