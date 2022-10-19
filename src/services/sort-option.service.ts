const getSortOptions = (): SortOption[] => {
  return [
    {
      code: 'original_title.desc',
      name: 'Title DESC',
    },
    {
      code: 'original_title.asc',
      name: 'Title ASC',
    },
    {
      code: 'vote_average.asc',
      name: 'Vote rating ASC',
    },
    {
      code: 'vote_average.desc',
      name: 'Vote rating DESC',
    },
  ];
};

export { getSortOptions };
