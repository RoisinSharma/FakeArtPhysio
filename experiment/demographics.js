
// Full screen
var fullscreen_text = "<p>The experiment will switch to full screen mode when you press the button below</p>"
var fullscreen_button = "Continue"
var fullscreen_on = {
    type: jsPsychFullscreen,
    message: fullscreen_text,
    button_label: fullscreen_button,
    fullscreen_mode: true,
    delay_after: 0,
}

//CONSENT FORM ===================================================================
//Q- will EDA data be collected?
const demographics_consent = {
    type: jsPsychSurvey,
    survey_json: function () {
        return {
            showQuestionNumbers: false,
            completeText: "Continue",
            pages: [
                {
                    elements: [
                        // Info text first
                        {
                            type: "html",
                            name: "information_sheet",
                            html: `
                    
                    <img src='https://blogs.brighton.ac.uk/sussexwrites/files/2019/06/University-of-Sussex-logo-transparent.png' width='150px' align='right'/><br><br><br><br><br>

                     <h1>Information Sheet</h1>
                    <p><b>Invitation to Take Part</b><br>
                    Thank you for considering to take part in this study that aims at deepening our understanding of human perception. 
                    This study is being conducted by Dr Dominique Makowski, and his team, from the <b>University of Sussex</b>, who are happy to be contacted if you have any questions (see contact information below).</p>

                    <p><b>Why have I been invited and what will I do?</b><br>
                    The goal is to study how new technology can impact <b>human appreciation of art</b>.
                    In this study, you will complete a visual task where you will view and rate artworks. Then you will complete some tasks and questionnaires, including a short one about mood. 
                    We will also measure your physiological processes to assess the relationship between how you experience your body and how you perceive these images.</p>
                        
                    <p><b>Do I have to take part?</b><br>
                    Your participation is entirely voluntary. You are free to choose not to take part, or to withdraw at any stage without having to give a reason and without being penalised in any way.
                    If you choose to take part, you will be asked to provide your consent electronically before starting the study.
                    As we are not collecting any personally identifiable information, it will not be possible to withdraw your data after you submit it.
                    
                        <p><b>Physiological Signals</b><br>
                    We will be recording some of your body's electric activity using ECG, EEG and EDA; both are simple non-intrusive procedures used in research and in the life sciences. 
                    Since this study is being undertaken for research purposes only, we will not be able to provide any feedback or information on clinical aspects of the data obtained. 
                    For the ECG we will be attaching some sensors to the skin, and for the EEG we will be using the Muse headset which contains electrodes that will be placed on your forehead and behind the ears. 
                    We kindly ask that you refrain from participating if you are aware of having skin reactions or allergies to adhesives or the materials used in the electrodes - primarily composed of silver and silver chloride.</p>

                    <p><b>What will happen to the results and my personal information?</b><br>
                    The results of this research may be written into a scientific publication. Your anonymity will be ensured in the way described in the consent information below. 
                    <b>Please read this information carefully</b> and then, if you wish to take part, please acknowledge that you have fully understood this sheet, and that you consent to take part in the study as it is described here.</p>
                    
                    <p><b>Who has approved this study?</b><br>
                    This study has been approved by the Faculty Research Ethics Committee: Science, Engineering and Technology, and the project reference number is 0294.
                    
                    <p><b>Insurance</b><br>  
                    The University of Sussex has insurance in place to cover its legal liabilities in respect of this study.

                    <p><b>Contact for Further Information</b><br>  
                    For further information about this research, or if you have any concerns, please contact Dr Dominique Makowski 
                    (<i style='color:DodgerBlue;'>D.Makowski@sussex.ac.uk</i>), Ana Neves (<i style='color:DodgerBlue;'>A.Neves@sussex.ac.uk</i>) or Róisín Sharma (<i style='color:DodgerBlue;'>rs843@sussex.ac.uk</i>).
                    If you have any concerns about the way in which the study has been conducted, you should contact the SEMSET Faculty Research Ethics Committee at <i style='color:DodgerBlue;'>frecsemset@sussex.ac.uk</i>.
                    
                
                            <h1><b>Consent</h1>

                            `,
                        },
                        // Consent checkboxes
                        {
                            type: "checkbox",
                            name: "consent_1",
                            title: "If you agree to participate in this study, then please read the following statements, and tick the box next to each statement to indicate consent.",
                            choices: [
                                "I understand that by checking this box I am agreeing to take part in the University of Sussex research described here, and that I have read and understood this information sheet.",
                                "I understand that my participation is entirely voluntary, that I can choose not to participate in part or all of the study, and that I can withdraw at any stage without having to give a reason and without being penalized in any way.",
                                "I understand that since the study is anonymous, it will be impossible to withdraw my data once I have completed it.",
                                "I understand that my personal data will be used for the purposes of this research study and will be handled in accordance with Data Protection legislation. I understand that the University's Privacy Notice provides further information on how the University uses personal data in its research.",
                                "I understand that my collected data will be stored in a de-identified way. De-identified data may be made publicly available through secured scientific online data repositories.",
                            ],
                            isRequired: true,
                            validators: [
                                {
                                    type: "answercount",
                                    minCount: 5, // number of checkboxes in choices
                                    maxCount: 5,
                                    text: "You must agree to all statements before continuing.",
                                },
                            ],
                        },
                        {
                            type: "checkbox",
                            name: "consent_2",
                            title: "By participating, you agree to follow the instructions and provide honest answers. If you do not wish to participate, simply close your browser.",
                            choices: [
                                "Please tick this box if you consent to taking part in this study.",
                            ],
                            isRequired: true,
                        },
                    ],
                },
            ],
        }
    },
    data: { screen: "consent" },
}

// Demographic info ========================================================================

//Added 'other' and 'prefer not to say' to gender (not in FakeArt)
var demographics_questions = {
    type: jsPsychSurvey,
    survey_json: {
        title: "About yourself",
        completeText: "Continue",
        pageNextText: "Next",
        pagePrevText: "Previous",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        html: `<div style="text-align: center;">Part 1/4</div>`,
                    },
                    {
                        title: "What is your gender?",
                        name: "Gender",
                        type: "radiogroup",
                        choices: ["Male", "Female", "Other", "Prefer not to say"],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 0,
                    },
                    {
                        type: "text",
                        title: "Please enter your age (in years)",
                        name: "Age",
                        isRequired: true,
                        inputType: "number",
                        min: 0,
                        max: 100,
                        placeholder: "e.g., 21",
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "What is your highest completed education level?",
                        name: "Education",
                        type: "radiogroup",
                        choices: [
                            {
                                value: "Doctorate",
                                text: "University (doctorate)",
                            },
                            {
                                value: "Master",
                                text: "University (master)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "Bachelor",
                                text: "University (bachelor)", // "<sub><sup>or equivalent</sup></sub>",
                            },
                            {
                                value: "High school",
                                text: "High school / Secondary school (or 6th form college)",
                            },
                            {
                                value: "Elementary school",
                                text: "Elementary school",
                            },
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: true,
                        colCount: 1,
                    },
                    {
                        visibleIf: "{Education} == 'Doctorate' || {Education} == 'Master' || {Education} == 'Bachelor'",
                        title: "What is your discipline?",
                        name: "Discipline",
                        type: "radiogroup",
                        choices: [
                            "Arts and Humanities",
                            "Media, Communication",
                            "Literature, Languages",
                            "History, Archaeology",
                            "Sociology, Anthropology",
                            "Political Science, Law",
                            "Business, Economics",
                            "Psychology, Neuroscience",
                            "Medicine",
                            "Biology, Chemistry, Physics",
                            "Mathematics, Physics",
                            "Engineering, Computer Science",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                    },
                    {
                        visibleIf: "{Education} == 'High school' || {Education} == 'Master' || {Education} == 'Bachelor'",
                        title: "Are you currently a student?",
                        name: "Student",
                        type: "boolean",
                        swapOrder: true,
                        isRequired: true,
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "How would you describe your ethnicity?",
                        name: "Ethnicity",
                        type: "radiogroup",
                        choices: [
                            "White",
                            "Black",
                            "Hispanic/Latino",
                            "Middle Eastern/North African",
                            "South Asian",
                            "East Asian",
                            "Southeast Asian",
                            "Mixed",
                            "Prefer not to say",
                        ],
                        showOtherItem: true,
                        otherText: "Other",
                        otherPlaceholder: "Please specify",
                        isRequired: false,
                        colCount: 1,
                    },
                    {
                        title: "In which country are you currently living?",
                        name: "Country",
                        type: "dropdown",
                        choicesByUrl: {
                            url: "https://surveyjs.io/api/CountriesExample",
                        },
                        placeholder: "e.g., France",
                        isRequired: false,
                    },
                ],
            },
            {
                elements: [
                    {
                        title: "How knowledgeable would you say you are about art (e.g., how familiar with artistic styles, artists or movements)?",
                        name: "Art_Expertise",
                        type: "rating",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Not at all",
                        maxRateDescription: "Very much so",
                        rateValues: [0, 1, 2, 3, 4, 5, 6],
                    },
                ],
            },
        ],
    },
    data: {
        screen: "demographic_questions",
    },
}