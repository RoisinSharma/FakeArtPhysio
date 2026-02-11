// Condition assignment ============================================
//Fisher-Yates-Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function assignCondition(stimuli_list) {
    let new_stimuli_list = []
    // Loop through unique styles
    for (let style of [...new Set(stimuli_list.map((a) => a.Style))]) {
        // Get all stimuli of this style
        var style_stimuli = stimuli_list.filter((a) => a.Style == style)

        // Shuffle style_stimuli
        style_stimuli = shuffleArray(style_stimuli) // Custom function defined above

        // Assign condition to each image
        let conditions = ["AI", "Human", "Forgery"]
        let third = Math.floor(style_stimuli.length / 3) // Base number of images for each condition
        let remainder = style_stimuli.length % 3 // Extra images

        let index = 0
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < third; j++) {
                style_stimuli[index].Condition = conditions[i]
                index++
            }

        let shuffledConditions = shuffleArray(conditions) // Shuffle conditions to assign extra images to random conditions
        for (let i = 0; i < remainder; i++) {
            style_stimuli[index].Condition = shuffledConditions[i]
            index++
        }

        // Add to new_stimuli_list
        new_stimuli_list.push(...style_stimuli)
    }
    return shuffleArray(new_stimuli_list)
}

// Function used to insert catch-trials ("what was the label?") in some trials
function generateRandomNumbers(min, max, N) {
    return [...Array(max - min + 1).keys()]
        .map((i) => i + min)
        .sort(() => Math.random() - 0.5)
        .slice(0, N)
        .sort((a, b) => a - b) // Sort the numbers in ascending order
}

// Variables ===================================================================
var fiction_trialnumber = 1
var color_cues = shuffleArray(["red", "blue", "green"])

color_cues = {
    AI: color_cues[0],
    Human: color_cues[1],
    Forgery: color_cues[2],
}

var text_cue = {
    AI: "AI-Generated",
    Human: "Original",
    Forgery: "Human Forgery",
}

stimuli = assignCondition(stimuli_list)

// We make 6 catch trials (always starting from 2 = the first trial)
catch_trials = [2].concat(generateRandomNumbers(3, stimuli_list.length, 5))

//screens===========================================================================================

var fiction_preloadstims = {
    type: jsPsychPreload,
    images: stimuli_list.map((a) => "stimuli/stimuli/" + a.Item),
    message: "Please wait while the experiment is being loaded (it can take a few minutes)",
}