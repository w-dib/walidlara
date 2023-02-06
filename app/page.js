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
              <a href="#venue">Venue</a>
            </li>
            <li>
              <a href="#party">Itinerary</a>
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
                      fillRule="evenodd"
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
                Together with our families, we are delighted to invite you to
                our wedding in Paphos, Cyprus. Please save the date and join us
                for a week of fun in the sun! We can&apos;t wait to see you
                there!
              </p>
              <p className="leading-1 text-gray-500">
                <span className="font-bold underline decoration-blue-500 decoration-2">
                  getting there
                </span>
                : to get to Paphos, Cyprus, you can fly to Larnaca International
                Airport (LCA). From there, you can take a taxi to Paphos, which
                is about 1 hour and 30 minutes away (~115 €). Alternatively, you
                can take a{" "}
                <Link
                  href="https://www.paphosbus.com/paphos-airport-bus/larnaca-airport-shuttle"
                  className="font-medium text-blue-500 hover:text-blue-600"
                >
                  bus{" "}
                </Link>{" "}
                (~2 to 3 €) from Larnaca to Paphos, which is about 2 hours and
                30 minutes away.
              </p>
              <p className="leading-1 text-gray-500">
                You can stay anywhere in Paphos. Otherwise, a special discount
                is provided by the{" "}
                <Link
                  className="font-medium text-blue-500 hover:text-blue-600"
                  href="https://coral.com.cy/"
                >
                  Coral Beach Hotel & Resort
                </Link>
                , which is located 5 minutes away from the wedding venue. To
                book a room, please email christina.antoniou@leptoscalypso.com
                with the title &quot;Walid and Lara&apos;s Wedding&quot;. The
                renowned Coral Beach Hotel & Resort, is nestled on the south
                west of the Island on 300 meters of sandy beach and borders with
                Akamas peninsula, an area protected by UNESCO.
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
                Venue
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
                      fillRule="evenodd"
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
          <div className="flex justify-center bg-gray-200 row-start-2 sm:row-start-1 h-96">
            <div className="bg-center bg-[url('/Resort.jpg')] h-full w-full">
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
                      fillRule="evenodd"
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
                We urge our guests to gather outside of the Coral Beach Hotel &
                Resort at 6:00pm. There will be a bus waiting to take you to the
                nearby wedding venue. The bus will leave at 6:15pm.
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
              Itinerary
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
                    fillRule="evenodd"
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
                  className="h-36 w-36 rounded-full object-cover"
                  src="/person-1.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-bold text-gray-900 font-serif">
                  24th June: ✈️ & 🍽️
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Arrival and welcome dinner! Guests arrive and settle into
                  their accommodation. Welcome dinner in a local restaurant to
                  kick off the festivities!
                </p>
              </div>
            </div>

            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full object-cover"
                  src="/person-2.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-bold text-gray-900 font-serif">
                  25th June: 🏖️ & 🍺
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Guests can spend the day lounging by the add beach name beach.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 sm:p-10 space-y-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full object-cover"
                  src="person-3.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-bold text-gray-900 font-serif">
                  26th June: ⛏️ & 🏺
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  Cultural day trip! Take a guided tour of Paphos Archaeological
                  Park to learn about the history and culture of the area Visit
                  the Tombs of the Kings, a UNESCO World Heritage site, and the
                  Paphos mosaics
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-36 w-36 rounded-full object-cover"
                  src="/person-4.jpg"
                  alt=""
                />
              </div>
              <div className="flex-1 min-w-0 justify-start px-4 space-y-2">
                <p className="text-xl font-bold text-gray-900 font-serif">
                  28th June: 🥞 & 👋
                </p>
                <p className="text-sm text-gray-500 leading-5">
                  We&apos;ll have a farewell brunch with all the guests before
                  they depart. Guests can toast to the memories made during the
                  wedding and exchange contact information for future
                  get-togethers.
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
                    fillRule="evenodd"
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
