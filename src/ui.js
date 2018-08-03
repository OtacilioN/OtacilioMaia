"use strict";

const { h, Text, Color } = require("ink");
const SelectInput = require("ink-select-input");
const opn = require("opn");

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: "Website",
    url: "https://otaciliomaia.com"
  },
  {
    label: "GitHub",
    url: "https://github.com/OtacilioN"
  },
  {
    label: "Twitter",
    url: "https://twitter.com/ItsOtariocilio"
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/otacilio"
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/otacilio.neto.7"
  },
  {
    label: "Quit",
    action() {
      process.exit();
    }
  }
];

module.exports = () => (
  <div>
    <div>
      <Text>Hi, I am Otacilio Maia, it is a pleasure to meet you!</Text>
    </div>
    <div>
      <Text>
        I love people and robots, not exactly in this order. Feel free to
        contact me and introduce yourself!
      </Text>
    </div>
    <br />

    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
