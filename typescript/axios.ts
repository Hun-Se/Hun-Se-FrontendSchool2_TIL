import axios, { AxiosResponse, AxiosError, Axios } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Created {}
interface Data {
  title: string;
  body: string;
  userId: number;
}

interface Config<D = any> {
  // 최대한 타입 좁혀주기
  method?: "post" | "get" | "put" | "patch" | "delete" | "head" | "options";
  url?: string;
  data?: D;
}

interface A {
  get: <T = any, R = AxiosResponse<T>>(url: string) => Promise<R>;
  post: <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: any
  ) => Promise<R>;
  (conifg: Config): void;
  (url: string, config: Config): void;
  isAxiosError: <T>(error: unknown) => error is AxiosError;
}
const a: A = axios;
(async () => {
  try {
    const response = await a.get<Post, AxiosResponse<Post>>(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const response2 = await a.post<Created, AxiosResponse<Created>, Data>(
      "https://jsonplaceholder.typicode.com/posts",
      { title: "foo", body: "bar", userId: 1 }
    );

    const response3 = await a({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });

    const response4 = await a("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });
  } catch (error) {
    //타입가드 is 방식
    if (a.isAxiosError(error)) {
      error.response;
      console.error((error as AxiosError<{ message: string }>).message);
    }

    // 타입가드
    // if (error instanceof AxiosError) {
    //   error.response;
    // }

    // as 사용하기
    // const errorResponse = (error as AxiosError).response;
    // console.error((error as AxiosError).response?.data);
    // errorResponse?.data;
  }
})();
