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

export default {
  conflictError,
  duplicatedAnimeError,  
  notFoundError,  
};
