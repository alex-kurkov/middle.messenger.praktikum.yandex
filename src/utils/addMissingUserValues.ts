type U = Omit<MSNUser, 'id' | 'avatar'>;

export function addMissingUserValues(user: U, newUser: U): U {
  const keys = Object.keys(newUser) as Array<keyof U>;
  keys?.forEach((key) => {
    if (newUser[key] === '') {
      newUser[key] = user[key];
    }
  });

  return newUser;
}
