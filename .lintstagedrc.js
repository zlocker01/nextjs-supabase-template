'lint-staged';
{
  ('*.{js,jsx,ts,tsx}');
  ['next lint --fix --file', 'prettier --ignore-path .gitignore --write'];
}
