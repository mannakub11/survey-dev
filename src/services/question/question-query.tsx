import {
  QueryClient,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { AnswerType } from "./question-type";
import { query } from "express";

export const ANSWER = "answers";

export const useSetAnswer = () => {
  const queryClient = useQueryClient();
  return useMutation(async (params: AnswerType[]) => {
    queryClient.setQueryData(ANSWER, params);
    return undefined;
  });
};

export const useGetAnswer = () => {
  const queryClient = useQueryClient();
  return useQuery([ANSWER], () => {
    return queryClient.getQueryData<AnswerType[]>(ANSWER);
  });
};
