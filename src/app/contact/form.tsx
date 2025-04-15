"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import useStore from "./useStore";

const Form = () => {
  const store = useStore();

  return (
    <form
      className="bg-neutral-50 text-neutral-700 p-10 lg:p-16 xl:p-20 my-14 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1000px] mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        store.submit();
      }}
    >
      <div className="">
        <p className="font-medium">Full Name *</p>
        <input
          value={store.name}
          onChange={(e) => useStore.setState({ name: e.target.value.slice(0, 36) })}
          disabled={store.isLoading}
          required
          placeholder="Name"
          type="text"
          className="h-12 px-4 border bg-transparent outline-none border-neutral-400 focus:border-neutral-700 placeholder:text-neutral-400 mt-3 w-full"
        />
      </div>
      <div className="">
        <p className="font-medium">Email *</p>
        <input
          value={store.email}
          onChange={(e) => useStore.setState({ email: e.target.value })}
          disabled={store.isLoading}
          required
          placeholder="Email"
          type="email"
          className="h-12 px-4 border bg-transparent outline-none border-neutral-400 focus:border-neutral-700 placeholder:text-neutral-400 mt-3 w-full"
        />
      </div>
      <div className="">
        <p className="font-medium">Contact Number *</p>
        <PhoneInput
          value={store.phoneNumber}
          onChange={(e) => useStore.setState({ phoneNumber: e as string })}
          disabled={store.isLoading}
          required
          international
          defaultCountry="IN"
          countryCallingCodeEditable={false}
          className="h-12 mt-3 [&>input]:bg-transparent [&>input]:outline-none [&>input]:h-full [&>input]:px-4 [&>input]:border [&>input]:border-neutral-400 focus:[&>input]:border-neutral-700 [&>input]:placeholder:text-neutral-400 [&>div]:border [&>div]:px-4 [&>div]:mr-4 [&>div>.PhoneInputCountrySelectArrow]:ml-3 [&>div>.PhoneInputCountrySelectArrow]:text-black [&>div]:border-neutral-400"
        />
      </div>
      <div className="">
        <p className="font-medium">City *</p>
        <input
          value={store.city}
          onChange={(e) => useStore.setState({ city: e.target.value.slice(0, 36) })}
          disabled={store.isLoading}
          required
          placeholder="City"
          type="text"
          className="h-12 px-4 border bg-transparent outline-none border-neutral-400 focus:border-neutral-700 placeholder:text-neutral-400 mt-3 w-full"
        />
      </div>
      <div className="col-span-full">
        <p className="font-medium">Message *</p>
        <textarea
          value={store.message}
          onChange={(e) => useStore.setState({ message: e.target.value.slice(0, 320) })}
          disabled={store.isLoading}
          rows={5}
          required
          placeholder="Type your message here ..."
          className="p-4 border bg-transparent outline-none border-neutral-400 focus:border-neutral-700 placeholder:text-neutral-400 mt-3 w-full resize-none"
        />
      </div>
      <div className="lg:col-span-full">
        <button
          disabled={store.isLoading}
          type="submit"
          className="mx-auto w-full max-w-[300px] flex items-center justify-center gap-x-2 px-5 bg-neutral-950 text-neutral-50 h-12 font-medium disabled:bg-neutral-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
