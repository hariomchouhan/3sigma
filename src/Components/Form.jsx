import React, { useState } from "react";
import toast from "react-hot-toast";

const FormHeader = () => {
  const [formData, setFormData] = useState({
    leadName: "",
    email: "",
    phone: "",
    address: "",
    sale: "",
    date: "",
    time: "",
    options: "",
    products: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  // console.log(formData);

  const submitHandler = (event) => {
    event.preventDefault();
    // send or print

    console.log("Finally printing the entire form ka data.............");
    console.log(formData);
    toast.success("Submit Successfully!")

    emptyForm();
  };

  const emptyForm = () => {
    setFormData({
      leadName: "",
      email: "",
      phone: "",
      address: "",
      sale: "",
      date: "",
      time: "",
      options: "",
      products: "",
      message: "",
    });
    toast.success("Reset or Empty!")
  };
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-xl sm:text-2xl not-italic font-bold">
          Add new lead form
        </h1>
        <button
          className="text-red-600 text-lg not-italic font-bold border-2 p-2 px-5 rounded-xl"
          onClick={emptyForm}
        >
          Cancel
        </button>
      </div>

      <form
        action="/#"
        onSubmit={submitHandler}
        className="flex flex-col gap-4 mt-36"
      >
        {/* Lead Name */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="leadName"
              className="text-black text-base not-italic font-bold"
            >
              Lead name
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <path
                d="M12.2362 2.83L18.9562 2.485L14.9724 5L19 7.485L12.2362 7.16L9.53283 10L6.76382 7.17L0.0437788 7.515L4.02765 5L0 2.515L6.76382 2.84L9.46717 0L12.2362 2.83Z"
                fill="#A42A31"
              />
            </svg>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M11 0C12.4587 0 13.8576 0.526784 14.8891 1.46447C15.9205 2.40215 16.5 3.67392 16.5 5C16.5 6.32608 15.9205 7.59785 14.8891 8.53553C13.8576 9.47322 12.4587 10 11 10C9.54131 10 8.14236 9.47322 7.11091 8.53553C6.07946 7.59785 5.5 6.32608 5.5 5C5.5 3.67392 6.07946 2.40215 7.11091 1.46447C8.14236 0.526784 9.54131 0 11 0ZM11 12.5C17.0775 12.5 22 14.7375 22 17.5V20H0V17.5C0 14.7375 4.9225 12.5 11 12.5Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="text"
              name="leadName"
              onChange={changeHandler}
              value={formData.leadName}
              placeholder="Enter lead name"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="leadName"
              required
            />
          </div>
        </div>

        {/* Email Id */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="emailId"
              className="text-black text-base not-italic font-bold"
            >
              Email ID
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <path
                d="M12.2362 2.83L18.9562 2.485L14.9724 5L19 7.485L12.2362 7.16L9.53283 10L6.76382 7.17L0.0437788 7.515L4.02765 5L0 2.515L6.76382 2.84L9.46717 0L12.2362 2.83Z"
                fill="#A42A31"
              />
            </svg>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M19.8 5.5L11 12.375L2.2 5.5V2.75L11 9.625L19.8 2.75M19.8 0H2.2C0.979 0 0 1.22375 0 2.75V19.25C0 19.9793 0.231785 20.6788 0.644365 21.1945C1.05694 21.7103 1.61652 22 2.2 22H19.8C20.3835 22 20.9431 21.7103 21.3556 21.1945C21.7682 20.6788 22 19.9793 22 19.25V2.75C22 1.22375 21.01 0 19.8 0Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              placeholder="Example@anyemail.com"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="emailId"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="phone"
              className="text-black text-base not-italic font-bold"
            >
              Phone number
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <path
                d="M12.2362 2.83L18.9562 2.485L14.9724 5L19 7.485L12.2362 7.16L9.53283 10L6.76382 7.17L0.0437788 7.515L4.02765 5L0 2.515L6.76382 2.84L9.46717 0L12.2362 2.83Z"
                fill="#A42A31"
              />
            </svg>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M4.42444 10.3867C6.18444 14.16 9.02 17.2533 12.4789 19.1733L15.1678 16.24C15.51 15.8667 15.9867 15.76 16.4144 15.9067C17.7833 16.4 19.25 16.6667 20.7778 16.6667C21.1019 16.6667 21.4128 16.8071 21.642 17.0572C21.8712 17.3072 22 17.6464 22 18V22.6667C22 23.0203 21.8712 23.3594 21.642 23.6095C21.4128 23.8595 21.1019 24 20.7778 24C15.2672 24 9.98226 21.6119 6.08567 17.3611C2.18908 13.1103 0 7.34491 0 1.33333C0 0.979711 0.128769 0.640573 0.357981 0.390524C0.587192 0.140476 0.898069 0 1.22222 0H5.5C5.82415 0 6.13503 0.140476 6.36424 0.390524C6.59345 0.640573 6.72222 0.979711 6.72222 1.33333C6.72222 3 6.96667 4.6 7.41889 6.09333C7.55333 6.56 7.45555 7.08 7.11333 7.45333L4.42444 10.3867Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="number"
              name="phone"
              onChange={changeHandler}
              value={formData.phone}
              maxLength={10}
              placeholder="+91 8800688763"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="phone"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="address"
              className="text-black text-base not-italic font-bold"
            >
              Address
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
            >
              <path
                d="M15.796 15.6C15.884 14.742 15.95 13.884 15.95 13C15.95 12.116 15.884 11.258 15.796 10.4H19.514C19.69 11.232 19.8 12.103 19.8 13C19.8 13.897 19.69 14.768 19.514 15.6M13.849 22.828C14.509 21.385 15.015 19.825 15.367 18.2H18.612C17.556 20.345 15.873 22.009 13.849 22.828ZM13.574 15.6H8.426C8.316 14.742 8.25 13.884 8.25 13C8.25 12.116 8.316 11.245 8.426 10.4H13.574C13.673 11.245 13.75 12.116 13.75 13C13.75 13.884 13.673 14.742 13.574 15.6ZM11 23.348C10.087 21.788 9.35 20.059 8.899 18.2H13.101C12.65 20.059 11.913 21.788 11 23.348ZM6.6 7.8H3.388C4.433 5.642 6.127 3.978 8.14 3.172C7.48 4.615 6.985 6.175 6.6 7.8ZM3.388 18.2H6.6C6.985 19.825 7.48 21.385 8.14 22.828C6.127 22.009 4.433 20.345 3.388 18.2ZM2.486 15.6C2.31 14.768 2.2 13.897 2.2 13C2.2 12.103 2.31 11.232 2.486 10.4H6.204C6.116 11.258 6.05 12.116 6.05 13C6.05 13.884 6.116 14.742 6.204 15.6M11 2.639C11.913 4.199 12.65 5.941 13.101 7.8H8.899C9.35 5.941 10.087 4.199 11 2.639ZM18.612 7.8H15.367C15.015 6.175 14.509 4.615 13.849 3.172C15.873 3.991 17.556 5.642 18.612 7.8ZM11 0C4.917 0 0 5.85 0 13C0 16.4478 1.15893 19.7544 3.22183 22.1924C4.24327 23.3995 5.4559 24.3571 6.79048 25.0104C8.12506 25.6637 9.55546 26 11 26C13.9174 26 16.7153 24.6304 18.7782 22.1924C20.8411 19.7544 22 16.4478 22 13C22 11.2928 21.7155 9.60235 21.1627 8.02512C20.6099 6.44788 19.7996 5.01477 18.7782 3.80761C17.7567 2.60045 16.5441 1.64288 15.2095 0.989566C13.8749 0.336255 12.4445 0 11 0Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="text"
              name="address"
              onChange={changeHandler}
              value={formData.address}
              placeholder="Gugurgram ,India"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="address"
            />
          </div>
        </div>

        {/* Google Map */}
        <div className="flex flex-col w-full m-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29427.878200163464!2d75.50437425!3d22.7844943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700909418440!5m2!1sen!2sin"
            // width="1026px"
            className="max-w-[1026px] w-full"
            height="220px"
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Sale value */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="sale"
              className="text-black text-base not-italic font-bold"
            >
              Sale value
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                d="M14.0433 5.33333C13.0167 3.76 10.8167 2.66667 8.25 2.66667H0V0H22V2.66667H16.0233C16.9033 3.44 17.5633 4.34667 17.9483 5.33333H22V8H18.3333C17.8383 11.7333 13.5117 14.6667 8.25 14.6667H6.91167L19.25 24H14.1717L1.83333 14.6667V12H8.25C11.4767 12 14.1533 10.2667 14.5933 8H0V5.33333H14.0433Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="number"
              name="sale"
              onChange={changeHandler}
              value={formData.sale}
              placeholder="50,00,000"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="sale"
            />
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="date"
              className="text-black text-base not-italic font-bold"
            >
              Date
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
            >
              <path
                d="M7.33333 11.7H4.88889V14.3H7.33333V11.7ZM12.2222 11.7H9.77778V14.3H12.2222V11.7ZM17.1111 11.7H14.6667V14.3H17.1111V11.7ZM19.5556 2.6H18.3333V0H15.8889V2.6H6.11111V0H3.66667V2.6H2.44444C1.08778 2.6 0 3.77 0 5.2V23.4C0 24.0896 0.257539 24.7509 0.715961 25.2385C1.17438 25.7261 1.79614 26 2.44444 26H19.5556C20.2039 26 20.8256 25.7261 21.284 25.2385C21.7425 24.7509 22 24.0896 22 23.4V5.2C22 4.51044 21.7425 3.84912 21.284 3.36152C20.8256 2.87393 20.2039 2.6 19.5556 2.6ZM19.5556 23.4H2.44444V9.1H19.5556V23.4Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="date"
              name="date"
              onChange={changeHandler}
              value={formData.date}
              placeholder="29 August 2023"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99]"
              id="date"
            />
          </div>
        </div>

        {/* Time */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="time"
              className="text-black text-base not-italic font-bold"
            >
              Time
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="27"
              viewBox="0 0 22 27"
              fill="none"
            >
              <path
                d="M11 24.3C13.3339 24.3 15.5722 23.1621 17.2225 21.1368C18.8729 19.1114 19.8 16.3643 19.8 13.5C19.8 10.6357 18.8729 7.88864 17.2225 5.86325C15.5722 3.83785 13.3339 2.7 11 2.7C8.66609 2.7 6.42778 3.83785 4.77746 5.86325C3.12714 7.88864 2.2 10.6357 2.2 13.5C2.2 16.3643 3.12714 19.1114 4.77746 21.1368C6.42778 23.1621 8.66609 24.3 11 24.3ZM11 0C12.4445 0 13.8749 0.349188 15.2095 1.02763C16.5441 1.70606 17.7567 2.70047 18.7782 3.95406C19.7996 5.20765 20.6099 6.69588 21.1627 8.33377C21.7155 9.97167 22 11.7272 22 13.5C22 17.0804 20.8411 20.5142 18.7782 23.0459C16.7153 25.5777 13.9174 27 11 27C4.917 27 0 20.925 0 13.5C0 9.91958 1.15893 6.4858 3.22183 3.95406C5.28473 1.42232 8.08262 0 11 0ZM11.55 6.75V13.8375L16.5 17.442L15.675 19.1025L9.9 14.85V6.75H11.55Z"
                fill="#3FAEFD"
              />
            </svg>
            <input
              type="time"
              name="time"
              onChange={changeHandler}
              value={formData.time}
              placeholder="29 August 2023"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99] select-none appearance-none"
              id="time"
            />
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="options"
              className="text-black text-base not-italic font-bold"
            >
              Options
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M5.35135 0.666667H22V3.33333H5.35135V0.666667ZM5.35135 11.3333V8.66667H22V11.3333H5.35135ZM1.78378 0C2.25687 0 2.71059 0.210713 3.04511 0.585786C3.37963 0.960859 3.56757 1.46957 3.56757 2C3.56757 2.53043 3.37963 3.03914 3.04511 3.41421C2.71059 3.78929 2.25687 4 1.78378 4C1.31069 4 0.856983 3.78929 0.522458 3.41421C0.187934 3.03914 0 2.53043 0 2C0 1.46957 0.187934 0.960859 0.522458 0.585786C0.856983 0.210713 1.31069 0 1.78378 0ZM1.78378 8C2.25687 8 2.71059 8.21071 3.04511 8.58579C3.37963 8.96086 3.56757 9.46957 3.56757 10C3.56757 10.5304 3.37963 11.0391 3.04511 11.4142C2.71059 11.7893 2.25687 12 1.78378 12C1.31069 12 0.856983 11.7893 0.522458 11.4142C0.187934 11.0391 0 10.5304 0 10C0 9.46957 0.187934 8.96086 0.522458 8.58579C0.856983 8.21071 1.31069 8 1.78378 8ZM5.35135 19.3333V16.6667H22V19.3333H5.35135ZM1.78378 16C2.25687 16 2.71059 16.2107 3.04511 16.5858C3.37963 16.9609 3.56757 17.4696 3.56757 18C3.56757 18.5304 3.37963 19.0391 3.04511 19.4142C2.71059 19.7893 2.25687 20 1.78378 20C1.31069 20 0.856983 19.7893 0.522458 19.4142C0.187934 19.0391 0 18.5304 0 18C0 17.4696 0.187934 16.9609 0.522458 16.5858C0.856983 16.2107 1.31069 16 1.78378 16Z"
                fill="#3FAEFD"
              />
            </svg>
            <select
              name="options"
              onChange={changeHandler}
              value={formData.options}
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99] appearance-none pr-8 pl-2 bg-no-repeat form-select"
              id="options"
            >
              <option defaultValue="">Select option</option>
              <option value="scorpio">Scorpio</option>
              <option value="scorpio">Scorpio</option>
              <option value="Fortuner">Fortuner</option>
              <option value="Thar">Thar</option>
              <option value="Legender">Legender</option>
              <option value="Defender">Defender</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col w-full m-auto">
          <div className="flex h-[36px] gap-2">
            <label
              htmlFor="products"
              className="text-black text-base not-italic font-bold"
            >
              Products
            </label>
          </div>
          <div className="flex h-[57px] bg-[#FFF] rounded-[10px] gap-1 md:gap-6 justify-evenly items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M5.35135 0.666667H22V3.33333H5.35135V0.666667ZM5.35135 11.3333V8.66667H22V11.3333H5.35135ZM1.78378 0C2.25687 0 2.71059 0.210713 3.04511 0.585786C3.37963 0.960859 3.56757 1.46957 3.56757 2C3.56757 2.53043 3.37963 3.03914 3.04511 3.41421C2.71059 3.78929 2.25687 4 1.78378 4C1.31069 4 0.856983 3.78929 0.522458 3.41421C0.187934 3.03914 0 2.53043 0 2C0 1.46957 0.187934 0.960859 0.522458 0.585786C0.856983 0.210713 1.31069 0 1.78378 0ZM1.78378 8C2.25687 8 2.71059 8.21071 3.04511 8.58579C3.37963 8.96086 3.56757 9.46957 3.56757 10C3.56757 10.5304 3.37963 11.0391 3.04511 11.4142C2.71059 11.7893 2.25687 12 1.78378 12C1.31069 12 0.856983 11.7893 0.522458 11.4142C0.187934 11.0391 0 10.5304 0 10C0 9.46957 0.187934 8.96086 0.522458 8.58579C0.856983 8.21071 1.31069 8 1.78378 8ZM5.35135 19.3333V16.6667H22V19.3333H5.35135ZM1.78378 16C2.25687 16 2.71059 16.2107 3.04511 16.5858C3.37963 16.9609 3.56757 17.4696 3.56757 18C3.56757 18.5304 3.37963 19.0391 3.04511 19.4142C2.71059 19.7893 2.25687 20 1.78378 20C1.31069 20 0.856983 19.7893 0.522458 19.4142C0.187934 19.0391 0 18.5304 0 18C0 17.4696 0.187934 16.9609 0.522458 16.5858C0.856983 16.2107 1.31069 16 1.78378 16Z"
                fill="#3FAEFD"
              />
            </svg>
            <select
              name="products"
              onChange={changeHandler}
              value={formData.products}
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99] appearance-none pr-8 pl-2 bg-no-repeat form-select"
              id="products"
            >
              <option value=""></option>
              <option value="scorpio">Scorpio</option>
              <option value="scorpio">Scorpio</option>
              <option value="Fortuner">Fortuner</option>
              <option value="Thar">Thar</option>
              <option value="Legender">Legender</option>
              <option value="Defender">Defender</option>
            </select>
          </div>
        </div>

        {/* Note */}
        <div className="flex flex-col mt-10 gap-3 w-full m-auto">
          <label
            htmlFor="note"
            className="text-black text-base not-italic font-bold"
          >
            Note
          </label>

          <div className="flex bg-[#FFF] rounded-[10px] gap-6 justify-evenly items-center">
            <textarea
              name="message"
              onChange={changeHandler}
              value={formData.message}
              id="note"
              cols="30"
              width="1025px"
              height="166px"
              rows="5"
              placeholder="Enter note"
              className="outline-none bg-transparent w-[90%] text-base not-italic font-bold leading-normal text-[#6e788a99] resize-none py-6 "
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col mt-64 w-full m-auto">
          <button className=" h-[60px] bg-[#3A4B86] rounded-[10px] text-white text-[20px] hover:bg-[#5367ad] transition-all duration-200">
            Add lead
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormHeader;
