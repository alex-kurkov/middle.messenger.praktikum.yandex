type U = Omit<MSNUser, 'id' | 'avatar'>;
type K = keyof U;

export function addMissingUserValues(user: U, newUser: U): U {
  const keys = Object.keys(newUser) as Array<K>;
  keys.forEach((key) => {
    if (newUser[key] === '') {
      newUser[key] = user[key];
    }
  });

  return newUser;
}
