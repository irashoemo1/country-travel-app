const regions = [
    {
      value: '',
      label: 'Select Region',
    },
    {
      value: 'Africa',
      label: 'Africa',
    },
    {
      value: 'Americas',
      label: 'Americas',
    },
    {
      value: 'Asia',
      label: 'Asia',
    },
    {
      value: 'Europe',
      label: 'Europe',
    },
    {
      value: 'Oceania',
      label: 'Oceania',
    }
  ]
  
export const selectRegions = regions.map(({ value, label }) => (
    <option key={label} value={value}>
      {' '}
      {label}
    </option>
  ))