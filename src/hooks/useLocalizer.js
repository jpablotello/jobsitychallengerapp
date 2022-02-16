import strings from 'jobsitychallengeapp/src/locale';

const useLocalizer = (...scopes) => {
  return {
    t: (key, scope = null) =>
      !scope ? translate(scopes, key) : translateScoped(key, scope),
    getCurrentLanguageCode: () => strings.getLanguage(),
    /* more logic here, ex: updateLanguage() */
  };
};

/* Returns the first string that matches with key in selected scopes */
const translate = (scopes, key) => {
  var result =
    scopes
      .map(scope => {
        return (strings)[scope];
      })
      .find(i => i)[key] || key;

  return result;
};

/* Returns the value for the key and scope passed as a paramether */
const translateScoped = (key, scope) => {
  return (strings)[scope][key] || key;
};

export default useLocalizer;
