const telnoInput = document.getElementById('user-input');
const results = document.getElementById('results-div')
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
results.style.display = 'none';


clearBtn.addEventListener("click", () => {
  results.innerHTML = '';
  results.style.display = 'none';
  telnoInput.value = '';
});

function validateTelno() {
    results.style.display = 'block';
    results.innerHTML = isValidNo(telnoInput.value)
      ? `<span class="resultsSpan"><span class="validspan">Valid</span> US number: ${telnoInput.value}</span>`
      :  `<span class="resultsSpan"><span class="invalidspan">Invalid</span> US number: ${telnoInput.value}</span>`;
}

checkBtn.addEventListener("click", () => {
  if (telnoInput.value === "") {
    alert("Please provide a phone number");
    return;
  }
  validateTelno();

});

telnoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        validateTelno();
    }
  });

//regex for numbers separated with -
//const hyphenRegex = /1\s?[0-9]{3}-[0-9]{3}-[0-9]{4}/;
// const hyphenRegex = /1?\s?[0-9]{3}-[0-9]{3}-[0-9]{4}/;

// //for number with parenthesis at first 3 nos. then hyphenated (works for both with space and w/o space before and after parenthesis)
// //const parenHyphRegex = /1\s?\(\d{3}\)\s?\d{3}-\d{4}/;

//const parenHyphRegex = /1?\s?\(\d{3}\)\s?\d{3}-\d{4}/;

const parenHyphRegex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;


// //separated with spaces
// const spaceRegex = /1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}/;

//nospace and first digit should not be 0
//const noSpaceRegex = /[1-9][0-9]{9}/;
const noSpaceRegex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

//list of valid nos.
const validNoList = [parenHyphRegex, noSpaceRegex];

//check the input which contain the regex for all valid us nos.
const isValidNo = (msg) => validNoList.some((regex) => regex.test(msg));
