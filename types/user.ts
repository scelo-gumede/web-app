export type StateForm = {
  status: boolean;
  message: string;
};

export type UserFormCreate = {
  action: (previousState: StateForm, formData: FormData) => Promise<StateForm>;
};

export type ListTileProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
