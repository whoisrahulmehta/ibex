import React, { useState } from "react";
import Thankspage from "../components/Thankspage";

function Plan() {
  const [option, setOption] = useState("Native");

  const handleSelect = (e) => {
    const location = e.target.value;
    setOption(location);
    console.log(location);
  };
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FOrm Submitted");
    setSubmitted(true);
  };
  return (
    <>
      {submitted ? (
        <Thankspage massage={"Your Form Has Been Submitted"} />
      ) : (
        <div className="book">
          <h1>Let's Plan A Trip for You </h1>
          <p>
            <label>
              Domestic
              <input
                type="radio"
                name="Category"
                id="Category"
                value="Native"
                onClick={(e) => handleSelect(e)}
              />
            </label>
            <label>
              International
              <input
                type="radio"
                name="Category"
                id="Category"
                value="International"
                onClick={(e) => handleSelect(e)}
              />
            </label>
          </p>
          <form onSubmit={handleSubmit}>
            <h1>Select from the following </h1>
            <label>
              <span>I am </span>
              <input type="text" id="name" name="name" placeholder=""  autoComplete="true"/> .
            </label>
            <label>
              <span>From </span>
              <input type="date" id="fromdate" name="fromdate" /> To{" "}
              <input type="date" id="todate" name="todate" />.
            </label>

            <label>
              <span>Number of Travellers</span>
              <select id="travellers" name="travellers">
                <option value="">travellers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5+">5+</option>
                <option value="5+">5+</option>
              </select>
            </label>
            {option === "International" ? (
              <label>
                <span>International Destinations</span>
                <select id="iDestinations" name="iDestinations">
                  <option value="">International Destinations</option>
                  <option value="Paris">Paris</option>
                  <option value="Rome">Rome</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="New York City">New York City</option>
                  <option value="London">London</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Bali">Bali</option>
                  <option value="Santorini">Santorini</option>
                  <option value="Kyoto">Kyoto</option>
                  <option value="Venice">Venice</option>
                  <option value="Prague">Prague</option>
                  <option value="Amsterdam">Amsterdam</option>
                  <option value="Istanbul">Istanbul</option>
                  <option value="Florence">Florence</option>
                  <option value="Bangkok">Bangkok</option>
                  <option value="Vienna">Vienna</option>
                  <option value="Machu Picchu">Machu Picchu</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Moscow">Moscow</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Dublin">Dublin</option>
                  <option value="Havana">Havana</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Seoul">Seoul</option>
                  <option value="Agra">Agra</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Copenhagen">Copenhagen</option>
                  <option value="Madrid">Madrid</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Lisbon">Lisbon</option>
                  <option value="Zurich">Zurich</option>
                  <option value="Athens">Athens</option>
                  <option value="Edinburgh">Edinburgh</option>
                  <option value="Helsinki">Helsinki</option>
                  <option value="Seville">Seville</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Budapest">Budapest</option>
                  <option value="Seoul">Seoul</option>
                  <option value="Chiang Mai">Chiang Mai</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Marrakesh">Marrakesh</option>
                  <option value="St. Petersburg">St. Petersburg</option>
                  <option value="Phuket">Phuket</option>
                  <option value="Mexico City">Mexico City</option>
                  <option value="Tel Aviv">Tel Aviv</option>
                  <option value="Lima">Lima</option>
                  <option value="Kuala Lumpur">Kuala Lumpur</option>
                  <option value="Copenhagen">Copenhagen</option>
                  <option value="Washington, D.C.">Washington, D.C.</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Dubrovnik">Dubrovnik</option>
                  <option value="Reykjavik">Reykjavik</option>
                  <option value="Queenstown">Queenstown</option>
                  <option value="Zurich">Zurich</option>
                  <option value="Dublin">Dublin</option>
                  <option value="Jerusalem">Jerusalem</option>
                  <option value="Miami">Miami</option>
                  <option value="Cancun">Cancun</option>
                  <option value="Kyoto">Kyoto</option>
                  <option value="Milan">Milan</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Venice">Venice</option>
                  <option value="Munich">Munich</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Orlando">Orlando</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Lyon">Lyon</option>
                  <option value="Rio de Janeiro">Rio de Janeiro</option>
                  <option value="Washington, D.C.">Washington, D.C.</option>
                  <option value="Florence">Florence</option>
                  <option value="Salzburg">Salzburg</option>
                  <option value="Krakow">Krakow</option>
                  <option value="Moscow">Moscow</option>
                  <option value="Lisbon">Lisbon</option>
                  <option value="Kiev">Kiev</option>
                  <option value="Las Vegas">Las Vegas</option>
                  <option value="San Diego">San Diego</option>
                  <option value="Boston">Boston</option>
                  <option value="Philadelphia">Philadelphia</option>
                  <option value="Portland">Portland</option>
                  <option value="New Orleans">New Orleans</option>
                  <option value="Nashville">Nashville</option>
                  <option value="Austin">Austin</option>
                  <option value="Seattle">Seattle</option>
                  <option value="San Diego">San Diego</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="Atlanta">Atlanta</option>
                  <option value="Miami">Miami</option>
                  <option value="Honolulu">Honolulu</option>
                  <option value="Maui">Maui</option>
                  <option value="Kauai">Kauai</option>
                  <option value="Oahu">Oahu</option>
                  <option value="The Big Island">The Big Island</option>
                  <option value="Key West">Key West</option>
                  <option value="The Florida Keys">The Florida Keys</option>
                  <option value="Napa Valley">Napa Valley</option>
                  <option value="Sonoma Valley">Sonoma Valley</option>
                  <option value="Lake Tahoe">Lake Tahoe</option>
                  <option value="Yosemite National Park">
                    Yosemite National Park
                  </option>
                  <option value="Yellowstone National Park">
                    Yellowstone National Park
                  </option>
                  <option value="Grand Teton National Park">
                    Grand Teton National Park
                  </option>
                  <option value="Zion National Park">Zion National Park</option>
                  <option value="Grand Canyon National Park">
                    Grand Canyon National Park
                  </option>
                  <option value="Bryce Canyon National Park">
                    Bryce Canyon National Park
                  </option>
                  <option value="Arches National Park">
                    Arches National Park
                  </option>
                  <option value="Glacier National Park">
                    Glacier National Park
                  </option>
                  <option value="Everglades National Park">
                    Everglades National Park
                  </option>
                  <option value="Rocky Mountain National Park">
                    Rocky Mountain National Park
                  </option>
                  <option value="Great Smoky Mountains National Park">
                    Great Smoky Mountains National Park
                  </option>
                  <option value="Denali National Park">
                    Denali National Park
                  </option>
                  <option value="Acadia National Park">
                    Acadia National Park
                  </option>
                  <option value="Joshua Tree National Park">
                    Joshua Tree National Park
                  </option>
                  <option value="Death Valley National Park">
                    Death Valley National Park
                  </option>
                  <option value="Sequoia National Park">
                    Sequoia National Park
                  </option>
                  <option value="Kings Canyon National Park">
                    Kings Canyon National Park
                  </option>
                  <option value="Yosemite National Park">
                    Yosemite National Park
                  </option>
                  <option value="Olympic National Park">
                    Olympic National Park
                  </option>
                  <option value="Redwood National Park">
                    Redwood National Park
                  </option>
                  <option value="Hawai'i Volcanoes National Park">
                    Hawai'i Volcanoes National Park
                  </option>
                  <option value="Petrified Forest National Park">
                    Petrified Forest National Park
                  </option>
                  <option value="Saguaro National Park">
                    Saguaro National Park
                  </option>
                  <option value="Great Basin National Park">
                    Great Basin National Park
                  </option>
                  <option value="Canyonlands National Park">
                    Canyonlands National Park
                  </option>
                  <option value="Capitol Reef National Park">
                    Capitol Reef National Park
                  </option>
                  <option value="Biscayne National Park">
                    Biscayne National Park
                  </option>
                  <option value="Mesa Verde National Park">
                    Mesa Verde National Park
                  </option>
                  <option value="Black Canyon of the Gunnison National Park">
                    Black Canyon of the Gunnison National Park
                  </option>
                  <option value="Badlands National Park">
                    Badlands National Park
                  </option>
                  <option value="Wind Cave National Park">
                    Wind Cave National Park
                  </option>
                  <option value="Hot Springs National Park">
                    Hot Springs National Park
                  </option>
                </select>
              </label>
            ) : (
              ""
            )}
            {option === "Native" ? (
              <label>
                <span>Native Destinations</span>
                <select id="nDestinations" name="nDestinations">
                  <option value="">Native Destinations</option>
                  <option value="Leh-Ladakh">Leh-Ladakh</option>
                  <option value="Manali">Manali</option>
                  <option value="Shimla">Shimla</option>
                  <option value="Mussoorie">Mussoorie</option>
                  <option value="Nainital">Nainital</option>
                  <option value="Rishikesh">Rishikesh</option>
                  <option value="Dharamshala">Dharamshala</option>
                  <option value="McLeod Ganj">McLeod Ganj</option>
                  <option value="Kullu">Kullu</option>
                  <option value="Kasol">Kasol</option>
                  <option value="Spiti Valley">Spiti Valley</option>
                  <option value="Auli">Auli</option>
                  <option value="Gulmarg">Gulmarg</option>
                  <option value="Sonmarg">Sonmarg</option>
                  <option value="Pahalgam">Pahalgam</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Gangtok">Gangtok</option>
                  <option value="Darjeeling">Darjeeling</option>
                  <option value="Kalimpong">Kalimpong</option>
                  <option value="Pelling">Pelling</option>
                  <option value="Yuksom">Yuksom</option>
                  <option value="Tawang">Tawang</option>
                  <option value="Mawlynnong">Mawlynnong</option>
                  <option value="Cherrapunji">Cherrapunji</option>
                  <option value="Shillong">Shillong</option>
                  <option value="Imphal">Imphal</option>
                  <option value="Agartala">Agartala</option>
                  <option value="Aizawl">Aizawl</option>
                  <option value="Kohima">Kohima</option>
                  <option value="Itanagar">Itanagar</option>
                  <option value="Siliguri">Siliguri</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Gangotri">Gangotri</option>
                  <option value="Yamunotri">Yamunotri</option>
                  <option value="Kedarnath">Kedarnath</option>
                  <option value="Badrinath">Badrinath</option>
                  <option value="Munsiyari">Munsiyari</option>
                  <option value="Chopta">Chopta</option>
                  <option value="Valley of Flowers">Valley of Flowers</option>
                  <option value="Binsar">Binsar</option>
                  <option value="Nanda Devi National Park">
                    Nanda Devi National Park
                  </option>
                  <option value="Hemis National Park">
                    Hemis National Park
                  </option>
                  <option value="Great Himalayan National Park">
                    Great Himalayan National Park
                  </option>
                  <option value="Kangra Valley">Kangra Valley</option>
                  <option value="Bhandardara">Bhandardara</option>
                  <option value="Mahabaleshwar">Mahabaleshwar</option>
                  <option value="Panchgani">Panchgani</option>
                  <option value="Mount Abu">Mount Abu</option>
                  <option value="Lansdowne">Lansdowne</option>
                  <option value="Almora">Almora</option>
                  <option value="Mukteshwar">Mukteshwar</option>
                  <option value="Chamba">Chamba</option>
                  <option value="Dalhousie">Dalhousie</option>
                  <option value="Kasauli">Kasauli</option>
                  <option value="Jog Falls">Jog Falls</option>
                  <option value="Coorg">Coorg</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Munnar">Munnar</option>
                  <option value="Ooty">Ooty</option>
                  <option value="Kodaikanal">Kodaikanal</option>
                  <option value="Yercaud">Yercaud</option>
                  <option value="Lakkidi">Lakkidi</option>
                  <option value="Idukki">Idukki</option>
                  <option value="Ponmudi">Ponmudi</option>
                  <option value="Vagamon">Vagamon</option>
                  <option value="Araku Valley">Araku Valley</option>
                  <option value="Lambasingi">Lambasingi</option>
                  <option value="Horsley Hills">Horsley Hills</option>
                  <option value="Anantagiri Hills">Anantagiri Hills</option>
                  <option value="Yelagiri">Yelagiri</option>
                  <option value="Yercaud">Yercaud</option>
                  <option value="Kotagiri">Kotagiri</option>
                  <option value="Coonoor">Coonoor</option>
                  <option value="Valparai">Valparai</option>
                  <option value="Kodaikanal">Kodaikanal</option>
                  <option value="Ketti">Ketti</option>
                  <option value="Yelagiri">Yelagiri</option>
                  <option value="Velliangiri Hills">Velliangiri Hills</option>
                  <option value="Panchgani">Panchgani</option>
                  <option value="Lavasa">Lavasa</option>
                  <option value="Lansdowne">Lansdowne</option>
                  <option value="Dhanaulti">Dhanaulti</option>
                  <option value="Auli">Auli</option>
                  <option value="Kausani">Kausani</option>
                  <option value="Naldehra">Naldehra</option>
                  <option value="Chamba">Chamba</option>
                  <option value="Khajjiar">Khajjiar</option>
                  <option value="Palampur">Palampur</option>
                  <option value="Manikaran">Manikaran</option>
                  <option value="Jageshwar">Jageshwar</option>
                  <option value="Mashobra">Mashobra</option>
                  <option value="Naldehra">Naldehra</option>
                  <option value="Chail">Chail</option>
                  <option value="Narkanda">Narkanda</option>
                  <option value="Shoghi">Shoghi</option>
                  <option value="Ranikhet">Ranikhet</option>
                  <option value="Binsar">Binsar</option>
                  <option value="Kasol">Kasol</option>
                  <option value="Pachmarhi">Pachmarhi</option>
                  <option value="Hampi">Hampi</option>
                  <option value="Gokarna">Gokarna</option>
                  <option value="Coorg">Coorg</option>
                  <option value="Chikmagalur">Chikmagalur</option>
                  <option value="Sakleshpur">Sakleshpur</option>
                  <option value="Agumbe">Agumbe</option>
                  <option value="Wayanad">Wayanad</option>
                  <option value="Thekkady">Thekkady</option>
                  <option value="Kumarakom">Kumarakom</option>
                  <option value="Alleppey">Alleppey</option>
                  <option value="Kovalam">Kovalam</option>
                  <option value="Varkala">Varkala</option>
                  <option value="Munnar">Munnar</option>
                  <option value="Ponmudi">Ponmudi</option>
                  <option value="Idukki">Idukki</option>
                </select>
              </label>
            ) : (
              ""
            )}
            <label>
              <span>You can contact me on</span>
              <input type="phone" id="phnumber" name="phnumber" />
            </label>
            <label>
              <span>Or email me at </span>
              <input type="email" id="email" name="email" />
            </label>
            <label>
              <span>Thank you </span>
            </label>
            <button>Get a response on this booking</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Plan;
