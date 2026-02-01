// DATABASE OF PASSAGES
const passagesData = [
    // --- PASSAGE 1: Environmental Science ---
    {
        title: "Passage 1: Climate Adaptation",
        text: `As the global climate warms, the focus of scientific and political discourse is shifting from solely preventing climate change to adapting to its inevitable effects. Adaptation involves adjusting ecological, social, and economic systems in response to actual or expected climatic stimuli and their effects. Unlike mitigation, which seeks to reduce greenhouse gas emissions, adaptation accepts that some degree of change is locked in. <br><br> Coastal cities are particularly vulnerable. Many are investing in 'hard' infrastructure like sea walls and storm surge barriers. However, urban planners are increasingly advocating for 'soft' defenses, such as restoring mangrove forests and wetlands, which naturally absorb floodwaters. These nature-based solutions often provide co-benefits, such as improved biodiversity and carbon sequestration.<br><br> In agriculture, adaptation requires the development of drought-resistant crop varieties and more efficient irrigation techniques. Farmers in arid regions are reviving ancient water conservation methods that predate modern industrial agriculture. However, adaptation has limits. If temperatures rise beyond a certain threshold, physiological limits of crops and humans may be exceeded, rendering some regions uninhabitable.`,
        questions: [
            { q: "What is the main focus of 'adaptation' mentioned in the passage?", options: ["Reducing gas emissions", "Adjusting to climatic effects", "Stopping climate change", "Building new cities"], ans: 1 },
            { q: "How does adaptation differ from mitigation?", options: ["Adaptation ignores the problem", "Mitigation focuses on emissions, adaptation on effects", "Adaptation is cheaper", "Mitigation is for cities only"], ans: 1 },
            { q: "Which of the following is an example of 'soft' defense?", options: ["Sea walls", "Storm barriers", "Concrete dams", "Restoring mangroves"], ans: 3 },
            { q: "Why are coastal cities considered vulnerable?", options: ["They have too many people", "They are close to rising sea levels", "They produce less food", "They lack technology"], ans: 1 },
            { q: "What is a 'co-benefit' of nature-based solutions?", options: ["Increased costs", "Biodiversity improvement", "Faster construction", "Higher emissions"], ans: 1 },
            { q: "What agricultural change is suggested for adaptation?", options: ["Planting more trees", "Drought-resistant crops", "Using more water", "Moving to cities"], ans: 1 },
            { q: "The passage mentions that farmers are reviving:", options: ["New technology", "Ancient water methods", "Chemical fertilizers", "Industrial machinery"], ans: 1 },
            { q: "The word 'inevitable' in the first paragraph most nearly means:", options: ["Avoidable", "Uncertain", "Unavoidable", "Surprising"], ans: 2 },
            { q: "According to the passage, what might happen if temperatures rise too much?", options: ["Adaptation will become easier", "Regions may become uninhabitable", "Crops will grow faster", "Sea walls will disappear"], ans: 1 },
            { q: "The tone of the passage is:", options: ["Emotional", "Informative and Objective", "Sarcastic", "Critical"], ans: 1 }
        ]
    },

    // --- PASSAGE 2: Economics/Society ---
    {
        title: "Passage 2: The Gig Economy",
        text: `The 'gig economy' refers to a labor market characterized by short-term contracts or freelance work as opposed to permanent jobs. While often hailed as a revolution in worker freedom, offering flexibility to choose when and where to work, it has drawn sharp criticism regarding worker rights. <br><br> Proponents argue that the gig economy lowers barriers to entry for the unemployed and allows for a better work-life balance. Platforms like Uber and Upwork connect workers directly with consumers, bypassing traditional gatekeepers. For students or parents, this flexibility is invaluable. <br><br> Critics, however, point out that gig workers often lack basic protections such as health insurance, paid leave, and retirement benefits. Since they are classified as 'independent contractors' rather than employees, companies are not legally required to provide these safety nets. Furthermore, the income is often unpredictable. Economic sociologists warn that this shift represents a transfer of risk from the corporation to the individual, potentially leading to a more precarious society.`,
        questions: [
            { q: "What defines the 'gig economy'?", options: ["Permanent government jobs", "Short-term freelance work", "Factory labor", "Unpaid volunteering"], ans: 1 },
            { q: "What is a major benefit cited by proponents?", options: ["Health insurance", "Guaranteed salary", "Flexibility", "Retirement plans"], ans: 2 },
            { q: "Who acts as the connector in the gig economy?", options: ["Government agencies", "Digital platforms", "Trade unions", "Banks"], ans: 1 },
            { q: "Why do critics dislike the gig economy?", options: ["It pays too much", "Workers lack protections", "It is too difficult to join", "It requires degrees"], ans: 1 },
            { q: "How are gig workers usually classified?", options: ["Full-time employees", "Independent contractors", "Partners", "Managers"], ans: 1 },
            { q: "What does 'unpredictable' refer to in the passage?", options: ["The weather", "The work hours", "The income", "The technology"], ans: 2 },
            { q: "What risk is transferred to the individual?", options: ["Financial security", "Physical safety", "Legal liability", "Corporate profit"], ans: 0 },
            { q: "The word 'precarious' most nearly means:", options: ["Safe", "Wealthy", "Unstable", "Modern"], ans: 2 },
            { q: "Which group is mentioned as benefiting from the flexibility?", options: ["CEOs", "Students and parents", "Factory owners", "Lawyers"], ans: 1 },
            { q: "The passage presents the gig economy as:", options: ["Perfect", "Terrible", "Having both pros and cons", "A failing system"], ans: 2 }
        ]
    },

    // --- PASSAGE 3: Biological Science ---
    {
        title: "Passage 3: Biological Evolution",
        text: `Evolution is the process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth. The central mechanism of evolution is 'natural selection,' a concept introduced by Charles Darwin. This theory suggests that individuals with traits better suited to their environment are more likely to survive and reproduce, passing those desirable traits to the next generation. <br><br> Over vast periods of time, this process results in significant changes in the characteristics of a population. For example, the long neck of a giraffe is an evolutionary adaptation that allows it to reach leaves high in trees that other animals cannot access. <br><br> Modern genetics has supported Darwin’s theory by showing how DNA transmits these traits. Mutations, which are random changes in DNA, provide the raw material for evolution. While most mutations are harmful or neutral, a few provide a survival advantage. Evolution is not a straight line toward perfection but a continuous adaptation to changing environments.`,
        questions: [
            { q: "What is the central mechanism of evolution mentioned in the text?", options: ["Artificial intelligence", "Natural selection", "Climate change", "Industrial revolution"], ans: 1 },
            { q: "Who introduced the concept of natural selection?", options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Gregor Mendel"], ans: 2 },
            { q: "According to the passage, which individuals are most likely to reproduce?", options: ["The strongest ones", "The largest ones", "Those best suited to their environment", "The oldest ones"], ans: 2 },
            { q: "Why is the giraffe's long neck mentioned?", options: ["To show it is a tall animal", "As an example of evolutionary adaptation", "To explain how it fights", "To describe its diet"], ans: 1 },
            { q: "What role does DNA play in evolution?", options: ["It stops evolution", "It transmits traits", "It creates food", "It changes the climate"], ans: 1 },
            { q: "What are 'mutations' described as?", options: ["Planned changes", "Random changes in DNA", "Diseases", "Animal behaviors"], ans: 1 },
            { q: "Are all mutations beneficial?", options: ["Yes, always", "No, most are harmful or neutral", "Only in humans", "Only in plants"], ans: 1 },
            { q: "The word 'diversified' in the first sentence means:", options: ["Became more varied", "Died out", "Stayed the same", "Moved locations"], ans: 0 },
            { q: "Evolution is described as:", options: ["A straight line to perfection", "A quick process", "Continuous adaptation", "A finished event"], ans: 2 },
            { q: "What provides the 'raw material' for evolution?", options: ["Water", "Mutations", "Sunlight", "Fossils"], ans: 1 }
        ]
    },

    // --- PASSAGE 4: History / Indus Valley ---
    {
        title: "Passage 4: The Indus Valley Civilization",
        text: `The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest major urban settlements. Flourishing around 2500 BCE in what is now Pakistan and northwest India, it was remarkable for its advanced urban planning. Unlike other ancient civilizations that grew organically, Harappan cities like Mohenjo-daro were laid out on a grid system, featuring sophisticated drainage and water management systems that were centuries ahead of their time. <br><br> One of the most intriguing aspects of this civilization is the apparent lack of palaces, temples, or clear evidence of a king or standing army. This has led historians to speculate that the society may have been relatively egalitarian, governed perhaps by a council of merchants or priests rather than a single monarch. <br><br> The civilization declined around 1900 BCE. Theories for this decline range from Aryan invasion to climate change, specifically the drying up of the Saraswati river or shifts in the monsoon patterns, which would have devastated their agriculture.`,
        questions: [
            { q: "Where was the Indus Valley Civilization located?", options: ["Egypt and Sudan", "Pakistan and northwest India", "China and Mongolia", "Greece and Italy"], ans: 1 },
            { q: "What was a key feature of Harappan cities?", options: ["Large Pyramids", "Grid system and drainage", "Giant walls", "Underground tunnels"], ans: 1 },
            { q: "The text says the drainage systems were:", options: ["Primitive", "Dirty", "Centuries ahead of their time", "Non-existent"], ans: 2 },
            { q: "What structures were notably missing from these cities?", options: ["Houses", "Markets", "Palaces and temples", "Roads"], ans: 2 },
            { q: "The word 'egalitarian' implies that the society might have been:", options: ["Ruled by a cruel king", "Based on equality", "Very poor", "Constantly at war"], ans: 1 },
            { q: "Who might have governed the society according to speculation?", options: ["A council of merchants", "A powerful general", "A foreign emperor", "A single king"], ans: 0 },
            { q: "When did the civilization begin to decline?", options: ["2500 BCE", "1900 BCE", "1000 AD", "500 BCE"], ans: 1 },
            { q: "Which of the following is NOT mentioned as a reason for decline?", options: ["Aryan invasion", "Climate change", "Drying of rivers", "A massive plague"], ans: 3 },
            { q: "The drying up of which river is mentioned?", options: ["Nile", "Saraswati", "Amazon", "Ganges"], ans: 1 },
            { q: "The phrase 'grew organically' in the text refers to cities that:", options: ["Used natural materials", "Developed without a planned grid", "Were full of gardens", "Were built by farmers"], ans: 1 }
        ]
    },

    // --- PASSAGE 5: Psychology / Behavior ---
    {
        title: "Passage 5: Emotional Intelligence",
        text: `For decades, IQ (Intelligence Quotient) was considered the primary indicator of success. However, in recent years, psychologists have highlighted the importance of EQ, or Emotional Intelligence. EQ is the ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others, and defuse conflict. <br><br> Emotional intelligence is generally defined by four attributes: self-management, self-awareness, social awareness, and relationship management. A person with high EQ knows their strengths and weaknesses and can control impulsive feelings. Unlike IQ, which is largely genetic and static, EQ is a skill that can be learned and improved over time. <br><br> In the workplace, EQ is increasingly valued over technical skills. Employers have found that staff with high emotional intelligence are better leaders, work better in teams, and adapt more easily to change. While a high IQ might get you the job, a high EQ helps you get promoted.`,
        questions: [
            { q: "What does EQ stand for?", options: ["Education Quality", "Emotional Quotient", "Energy Quotient", "Emotional Intelligence"], ans: 3 },
            { q: "According to the passage, what was previously thought to be the main indicator of success?", options: ["Money", "IQ", "EQ", "Physical strength"], ans: 1 },
            { q: "Which of the following is NOT one of the four attributes of EQ?", options: ["Self-awareness", "Social awareness", "Mathematical ability", "Relationship management"], ans: 2 },
            { q: "What does 'self-management' allow a person to do?", options: ["Control impulsive feelings", "Manage other people's money", "Calculate numbers fast", "Ignore emotions"], ans: 0 },
            { q: "How is EQ different from IQ regarding development?", options: ["EQ cannot be changed", "IQ can be learned, EQ cannot", "EQ can be learned and improved", "They are exactly the same"], ans: 2 },
            { q: "Why do employers value EQ?", options: ["It is cheaper", "It helps with teamwork and leadership", "It replaces the need for skills", "It shows high IQ"], ans: 1 },
            { q: "The phrase 'defuse conflict' means to:", options: ["Start a fight", "Reduce tension", "Ignore a problem", "Win an argument"], ans: 1 },
            { q: "What does the text say about high IQ vs. high EQ?", options: ["IQ gets you promoted", "EQ gets you the job", "IQ gets the job, EQ helps promotion", "Neither matters"], ans: 2 },
            { q: "A person with high 'social awareness' is likely able to:", options: ["Empathize with others", "Work alone", "Solve math problems", "Sleep well"], ans: 0 },
            { q: "The main idea of this passage is:", options: ["IQ is useless", "EQ is important for success", "How to calculate IQ", "The history of psychology"], ans: 1 }
        ]
    }
];

// APP LOGIC
let currentPassageIndex = 0;

function loadPassage(index) {
    currentPassageIndex = index;
    const data = passagesData[index];

    // Hide Home, Show Quiz
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');
    
    // Reset State
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('submit-btn').style.display = 'block';

    // Load Text
    document.getElementById('passage-title').innerText = data.title;
    document.getElementById('passage-text').innerHTML = data.text;

    // Load Questions
    const qContainer = document.getElementById('questions-container');
    qContainer.innerHTML = ''; // Clear old

    data.questions.forEach((item, qIndex) => {
        const qBlock = document.createElement('div');
        qBlock.classList.add('question-block');
        
        let optionsHtml = '';
        item.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label>
                    <input type="radio" name="q${qIndex}" value="${optIndex}">
                    ${opt}
                </label>
            `;
        });

        qBlock.innerHTML = `
            <span class="q-txt">${qIndex + 1}. ${item.q}</span>
            <div class="options">${optionsHtml}</div>
        `;
        qContainer.appendChild(qBlock);
    });
}

function submitQuiz() {
    const data = passagesData[currentPassageIndex];
    let score = 0;
    let allAnswered = true;
    const qBlocks = document.getElementsByClassName('question-block');

    data.questions.forEach((item, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        const block = qBlocks[qIndex];
        
        // Reset border
        block.style.borderLeft = "4px solid #ddd";

        if (selected) {
            if (parseInt(selected.value) === item.ans) {
                score++;
                block.style.borderLeft = "4px solid #27ae60"; // Green for correct
            } else {
                block.style.borderLeft = "4px solid #e74c3c"; // Red for wrong
            }
        } else {
            allAnswered = false;
        }
    });

    if (!allAnswered) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Show Result
    const feedback = document.getElementById('feedback-msg');
    const resultBox = document.getElementById('result-box');
    
    document.getElementById('score').innerText = score;
    
    if (score === 10) {
        feedback.innerText = "Excellent! Perfect Score 🌟";
        feedback.style.color = "#27ae60";
    } else if (score >= 8) {
        feedback.innerText = "Nice! Very Good Work 👍";
        feedback.style.color = "#2980b9";
    } else if (score >= 5) {
        feedback.innerText = "Good! Keep Practicing 📚";
        feedback.style.color = "#f39c12";
    } else {
        feedback.innerText = "Don't Give Up! Try Again 💪";
        feedback.style.color = "#e74c3c";
    }

    resultBox.classList.remove('hidden');
    document.getElementById('submit-btn').style.display = 'none';
    resultBox.scrollIntoView({ behavior: 'smooth' });
}

function goHome() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
    window.scrollTo(0, 0);
}

function resetQuiz() {
    loadPassage(currentPassageIndex);
    window.scrollTo(0, 0);
}

