import { ApolloError } from 'apollo-server';

export const ServiceResolvers = {
  Query: {
    getAllUsers: async (_: any, args: any) => {
      try {
        const mockUsers = [{ name: "xyz" }, { name: "abc" }];
        return mockUsers;
      } catch (error: any) {
        throw new ApolloError(error.message as string);
      }
    },
  },
};
