/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import useCountdown from "../hooks/useCountdown";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
export default function Home() {
  const targetDate = "2023-06-27";
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <main className="max-w-7xl mx-auto space-y-10 sm:space-y-24">
      <div className="w-full bg-no-repeat bg-[url('/weddingsm.png')] h-96 lg:h-[36rem] bg-cover bg-top bg-black relative">
        <div className="max-w-3xl mx-auto pt-4 sm:pt-10">
          <ul className="flex flex-row items-start justify-center gap-4 sm:gap-10 text-white text-lg sm:text-2xl uppercase">
            <li>
              <a href="#story">Wedding</a>
            </li>
            <li>
              <a href="#venue">The Venue</a>
            </li>
            <li>
              <a href="#party">The Party</a>
            </li>
            <li>
              <a href="#rsvp">RSVP</a>
            </li>
          </ul>
        </div>
        <div className="absolute top-1/2 sm:top-1/4 w-full">
          <p className="text-center text-white text-2xl  sm:text-5xl font-serif font-bold">
            Walid and Lara&apos;s Wedding
          </p>
        </div>
        <div className="absolute bottom-5 w-full">
          <p className="text-center text-white sm:text-4xl font-serif text-bold">
            27th June 2023 - Paphos, Cyprus{" "}
          </p>
          <p className="text-center text-white  text-sm font-serif">
            See you in {days} Days, {hours} Hours, {minutes} Minutes, {seconds}{" "}
            Seconds
          </p>
        </div>
      </div>

      <div></div>

      {/* <!-- Our Story --> */}

      <div id="story" className="w-full">
        <div className="flex justify-center">
          <div className="max-w-5xl ">
            <div className="flex items-center justify-center flex-col text-center">
              <h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
                Our Destination Wedding
              </h2>
              <div className="flex items-center flex-row justify-center">
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 fill-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
              </div>
            </div>

            <div className="text-center space-y-4 px-4 sm:px-0">
              <p className="leading-1 text-gray-500 font-sans">
                You can stay anywhere in Paphos! Otherwise, a special discount
                is provided by Coral Beach Hotel & Resort, located 5 minutes
                away from the benue. To book, please email
                christina.antoniou@leptoscalypso.com with the title &quot;Walid
                and Lara&apos;s Wedding&quot;
              </p>
              <p className="leading-1 text-gray-500">
                The renowned Coral Beach Hotel & Resort, is nestled on the south
                west of the Island on 300 meters of sandy beach and borders with
                Akamas peninsula, an area protected by UNESCO. Occupying a
                superb and stunning location and overlooking the golden sandy
                beaches and sparkling waters of Coral Bay, the resort boasts
                unique architecture which is inspired by nature, its
                unparalleled surroundings and the fiery sunsets the hotel
                enjoys.
              </p>
              <p className="leading-1 text-gray-500">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- venue --> */}
      <div id="venue" className="w-full space-y-10 sm:space-y-0">
        <div className="grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-2">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col text-center">
              <h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
                The venue
              </h2>
              <div className="flex items-center flex-row justify-center">
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 fill-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col text-center">
              <div className="text-gray-500 leading-8 px-10">
                <ul>
                  <li className="font-bold">Coral Beach Hotel & Resort</li>
                  <li>
                    <FaMapMarkerAlt className="inline mb-1 mr-2" />
                    Coral Bay Ave 70, Peyia 8575, Cyprus
                  </li>
                  <li>
                    <FaPhone className="inline mb-1 mr-2" />
                    +35726881000
                  </li>
                  <li>
                    <FaEnvelope className="inline mb-1 mr-2" />
                    christina.antoniou@leptoscalypso.com
                  </li>
                  <li>
                    <CgWebsite className="inline mb-1 mr-2" />
                    <Link
                      className="font-medium text-blue-500 hover:text-blue-600"
                      href="https://coral.com.cy/"
                    >
                      Hotel website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="https://goo.gl/maps/cTcpaC8GQ2JqCsJ1A">
            {" "}
            <div className="flex justify-center bg-gray-200 p-4 h-96 bg-cover bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=34.85766475656742,32.36255412490238&zoom=12&size=900x900&markers=color:red%7C34.85766475656742,32.36255412490238&key=AIzaSyCZSRcrSDPJ88K3w_s9Rmmr7g5m5Y9LFhA')]"></div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-2">
          <div className="flex justify-center bg-gray-200 p-4 row-start-2 sm:row-start-1 h-96">
            <div className="bg-center bg-[url('/images/venue-2.jpg')] h-full w-full">
              &nbsp;
            </div>
          </div>

          <div className="flex items-center justify-center flex-col row-start-1">
            <div className="flex items-center justify-center flex-col text-center">
              <h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
                The Reception
              </h2>
              <div className="flex items-center flex-row justify-center">
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 fill-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-400 px-2">&#8212;&#8212;</div>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col text-center">
              <p className="text-gray-500 px-10 leading-8">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- The Party --> */}
      <div id="party" className="w-full">
        <div>
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
              The Party
            </h2>
            <div className="flex items-center flex-row justify-center">
              <div className="text-gray-400 px-2">&#8212;&#8212;</div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 fill-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-gray-400 px-2">&#8212;&#8212;</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-x-1 divide-transparent sm:divide-red-300">
          <div className="flex flex-col p-5 sm:p-10 space-y-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full"
                  src="images/person-1.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-medium text-gray-900 font-serif">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </p>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full"
                  src="images/person-2.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-medium text-gray-900 font-serif">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 sm:p-10 space-y-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full"
                  src="images/person-3.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-medium text-gray-900 font-serif">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full"
                  src="images/person-4.jpeg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-medium text-gray-900 font-serif">
                  Leslie Alexander
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <!-- RSVP -->
      <div id="rsvp" className="w-full bg-gray-200 pt-10">
        <div>
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-4xl font-bold block font-serif tracking-wide text-gray-700">
              RSVP
            </h2>
            <div className="flex items-center flex-row justify-center">
              <div className="text-gray-400 px-2">&#8212;&#8212;</div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 fill-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-gray-400 px-2">&#8212;&#8212;</div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 max-w-4xl mx-auto px-4 sm:px-0">
          <p className="leading-1 text-gray-500 font-sans">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="px-4 py-5 ">
              <form className="flex items-center space-x-2">
                <div className="w-2/3">
                  <input
                    type="email"
                    name="email"
                    className="border-2 border-gray-900 block w-full px-4 py-2 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <button
                  type="submit"
                  className="font-serif uppercase w-1/3 inline-flex items-center justify-center px-4 py-2  border-2 border-gray-900 text-white bg-gray-900"
                >
                  I&apos;m in
                </button>
              </form>
            </div>
          </div>
        </div> */
}

{
  /* <!-- FOOTER -->
        <div className="text-center space-y-4 max-w-4xl mx-auto ">
          <p className="text-sm p-10">Test</p>
        </div> </div>*/
}
