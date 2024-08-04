## Hooks

- Always place it inside component
- They are functions which can only be called from inside component
- Built in hook and also you can create your own hook
- Use effect hook to sync with external api
  - useEffect(<function>, <dependency_list>)
    - dependency_list: Variable to watch for. If it changes the function is called.
