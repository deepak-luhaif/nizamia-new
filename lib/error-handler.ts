import toast from 'react-hot-toast';

export const handleError = (error: any) => {
  if (error?.errors) {
    error?.errors.map((err: any) => {
      toast.error(err?.message);
    });
  }
};
