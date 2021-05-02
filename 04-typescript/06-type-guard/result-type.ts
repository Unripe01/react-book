type Result<T, E extends Error> = Ok<T, E> | Err<T, E>;

export class Ok<T, E extends Error> {
  constructor(readonly val: T) {}
  isOk = (): this is Ok<T, E> => true;
  isErr = (): this is Err<T, E> => false;
}

export class Err<T, E extends Error> {
  constructor(readonly err: E) {}
  isOk = (): this is Ok<T, E> => false;
  isErr = (): this is Err<T, E> => true;
}

export const withResult = <T, A extends any[], E extends Error>(
  fn: (...args: A) => Promise<T>,
) => async (...args: A): Promise<Result<T, E>> => {
  try {
    return new Ok(await fn(...args));
  } catch (error) {
    if (error instanceof Error) {
      return new Err(error as E);
    }
  }
};

// class User {
//   name :string
// }

// const getUser:  (userId: string) => Promise<User> = async (s) => {
//   return new Promise<User>( (resolve) => {
//     const user = new User()
//     user.name = s
//     resolve( new User())
//   } )
// }

// const func = async () =>{

//   const data1 = withResult(getUser);
//   const data2 = await data1('aaa');
//   console.log(data2);
// }
// func();

