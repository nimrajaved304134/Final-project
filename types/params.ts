type Props = {
    params: { category: string } | Promise<{ category: string }>;
    searchParams?: { [key: string]: string | string[] | undefined };
  };