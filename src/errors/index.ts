import { ApplicationError } from "../protocols/protocols";

function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

function duplicatedAnimeError(animeTittle: string): ApplicationAnimeNameError {  
  return {
    name: "DuplicatedAnimeError",
    message: "There is already an anime with given title",
    animeTittle,
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

type ApplicationAnimeNameError = ApplicationError & { 
  animeTittle: string };

export default {
  conflictError,
  duplicatedAnimeError,  
  notFoundError,
  invalidDataError,  
};
