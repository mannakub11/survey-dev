import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { AnswerType } from "./question-type";

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
  return queryClient.getQueryData(ANSWER);
};
