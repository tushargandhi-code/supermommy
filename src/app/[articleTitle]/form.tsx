"use client";

import useStore from "./useStore";

const Form = () => {
  const store = useStore();

  return (
    <form
      className="p-6 w-full max-w-[350px] mx-auto text-sm shadow border mt-10 lg:mt-0"
      onSubmit={(e) => {
        e.preventDefault();
        store.submit();
      }}
    >
      <p className="text-xl font-bold">Subscribe to our newsletter</p>
      <p className="text-neutral-500 mt-1 text-sm">
        Stay up to date with our latest news and promotions
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          value={store.firstName}
          onChange={(e) => useStore.setState({ firstName: e.target.value })}
          disabled={store.isLoading}
          required
          placeholder="First name"
          type="text"
          className="h-10 px-4 outline-none border"
        />
        <input
          value={store.lastName}
          onChange={(e) => useStore.setState({ lastName: e.target.value })}
          disabled={store.isLoading}
          required
          placeholder="Last name"
          type="text"
          className="h-10 px-4 outline-none border"
        />
        <input
          value={store.email}
          onChange={(e) => useStore.setState({ email: e.target.value })}
          disabled={store.isLoading}
          required
          placeholder="Email"
          type="email"
          className="h-10 px-4 outline-none border col-span-full"
        />
      </div>
      <div className="mt-4 flex items-start gap-2">
        <input
          type="checkbox"
          required
          checked={store.checked}
          onChange={(e) => useStore.setState({ checked: e.target.checked })}
          className="mt-1 accent-neutral-950"
        />
        <p className="text-sm">I agree to receive emails from this website</p>
      </div>
      <button
        disabled={store.isLoading}
        type="submit"
        className="bg-neutral-950 text-neutral-50 py-2 font-medium disabled:bg-neutral-300 px-5 mt-4"
      >
        Subscribe
      </button>
    </form>
  );
};

export default Form;
