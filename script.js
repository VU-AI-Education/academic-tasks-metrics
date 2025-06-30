// Function data with progressive prompt building
const functionData = {
    'idea-generation': {
        title: 'Idea Generation',
        definition: 'Generating new ideas, identifying research gaps, or formulating research questions.',
        intent: 'Seek Creativity',
        criteria: ['User Satisfaction', 'Logical Coherence', 'Creativity'],
        basicPrompt: 'Generate creative research questions.',
        prompts: [
            'Generate 3 creative research questions that would be helpful for a researcher in [specific field].',
            'Generate 3 creative, logically structured research questions that would be helpful for a researcher in [specific field]. Ensure each question is scientifically sound.',
            'Generate 3 creative, logically structured research questions that would be helpful for a researcher in [specific field]. Ensure each question is scientifically sound and explores innovative angles or novel approaches.'
        ],
        finalPrompt: 'Suggest 3 creative research questions on antimicrobial resistance in microbiology that would be helpful for a researcher. Ensure each question is scientifically sound, logically structured, and explores innovative angles or novel approaches in the field.',
        metricDescriptions: [
            'The question should prompt a response that is helpful and meets user needs',
            'The question should prompt a response that is logically structured and scientifically sound',
            'The question should prompt a response that is innovative and explores new angles or approaches'
        ],
        validations: [
            'User Satisfaction: Specific field + helpful focus',
            'Logical Coherence: Scientifically sound + structured',
            'Creativity: Innovative angles + novel approaches'
        ]
    },
    'research-planning': {
        title: 'Research Planning',
        definition: 'Planning studies, selecting methods, or developing research protocols.',
        intent: 'Ask for Advice',
        criteria: ['User Satisfaction', 'Factuality', 'Fairness and Responsibility'],
        basicPrompt: 'Plan a research study.',
        prompts: [
            'Plan a study that would be helpful and appropriate for the research question.',
            'Plan a study with evidence-based methods that would be helpful and appropriate for the research question.',
            'Plan a study with ethical, evidence-based methods that would be helpful and appropriate for the research question, ensuring responsible research practices.'
        ],
        finalPrompt: 'Plan a study on antihistamine with an ethical, evidence-based method that would be helpful and appropriate for the research question, ensuring responsible research practices and participant safety.',
        metricDescriptions: [
            'The question should prompt a response that is helpful and meets the researcher\'s needs',
            'The question should prompt a response that is evidence-based and scientifically accurate',
            'The question should prompt a response that is ethical and follows responsible research practices'
        ],
        validations: [
            'User Satisfaction: Helpful + appropriate for research question',
            'Factuality: Evidence-based + scientifically accurate methods',
            'Fairness and Responsibility: Ethical + responsible practices'
        ]
    },
    'writing-assistance': {
        title: 'Writing Assistance',
        definition: 'Completing sentences, elaborating ideas, or generating written parts.',
        intent: 'Text Assistant',
        criteria: ['Clarity', 'User Satisfaction', 'Logical Coherence'],
        basicPrompt: 'Rewrite this text.',
        prompts: [
            'Rewrite this text to improve clarity for a scientific audience.',
            'Rewrite this text to improve clarity and flow for a scientific audience in a way that meets your needs.',
            'Rewrite this text to improve clarity and flow for a scientific audience in a way that meets your needs, ensuring logical structure and coherent arguments.'
        ],
        finalPrompt: 'Rewrite this text to improve clarity and flow for a scientific audience in a way that meets your needs, ensuring logical structure and coherent arguments throughout the document.',
        metricDescriptions: [
            'The question should prompt a response that is clear and easy to understand',
            'The question should prompt a response that meets the user\'s specific needs and expectations',
            'The question should prompt a response that has logical structure and coherent arguments'
        ],
        validations: [
            'Clarity: Clear + easy to understand for scientific audience',
            'User Satisfaction: Meets needs + expectations',
            'Logical Coherence: Logical structure + coherent arguments'
        ]
    },
    'structuring': {
        title: 'Structuring',
        definition: 'Organizing writing into sections or adjusting tone and flow.',
        intent: 'Text Assistant',
        criteria: ['Clarity', 'User Satisfaction', 'Logical Coherence'],
        basicPrompt: 'Organize this draft.',
        prompts: [
            'Organize this draft into clear sections with headings.',
            'Organize this draft into clear sections with headings that improve its flow and meet your organizational needs.',
            'Organize this draft into clear sections with headings that improve its flow and meet your organizational needs, ensuring logical progression and coherent structure.'
        ],
        finalPrompt: 'Organize this draft into clear sections with headings that improve its flow and meet your organizational needs, ensuring logical progression and coherent structure throughout.',
        metricDescriptions: [
            'The question should prompt a response that is clear and easy to follow',
            'The question should prompt a response that meets the user\'s organizational needs',
            'The question should prompt a response that follows logical progression and coherent structure'
        ],
        validations: [
            'Clarity: Clear sections + easy to follow',
            'User Satisfaction: Meets organizational needs',
            'Logical Coherence: Logical progression + coherent structure'
        ]
    },
    'visual-multimedia': {
        title: 'Visual and Multimedia Integration',
        definition: 'Creating visuals, tables, or multimedia for academic purposes.',
        intent: 'Seek Creativity',
        criteria: ['User Satisfaction', 'Logical Coherence', 'Creativity'],
        basicPrompt: 'Create a diagram.',
        prompts: [
            'Create a clear diagram that would be helpful for your presentation.',
            'Create a clear, logically structured diagram that would be helpful for your presentation.',
            'Create a clear, creative diagram with logical structure that would be helpful for your presentation, using innovative visual approaches.'
        ],
        finalPrompt: 'Create a clear, creative diagram of the malaria life cycle for a presentation that would be helpful for your audience, using logical structure and innovative visual approaches.',
        metricDescriptions: [
            'The question should prompt a response that is helpful and meets presentation needs',
            'The question should prompt a response that is logically structured and scientifically accurate',
            'The question should prompt a response that uses creative and innovative approaches'
        ],
        validations: [
            'User Satisfaction: Helpful + meets presentation needs',
            'Logical Coherence: Logical structure + scientifically accurate',
            'Creativity: Creative + innovative visual approaches'
        ]
    },
    'extracting-analyzing': {
        title: 'Extracting and Analysing Information',
        definition: 'Identifying key information or analysing content from academic sources.',
        intent: 'Factual QA',
        criteria: ['Factuality', 'User Satisfaction', 'Clarity'],
        basicPrompt: 'Extract key information.',
        prompts: [
            'Extract key variables and methods from this article accurately.',
            'Extract key variables and methods from this article accurately and clearly for your needs.',
            'Extract key variables and methods from this article clearly and accurately in a way that meets your research needs.'
        ],
        finalPrompt: 'Extract key variables and methods from this article clearly and accurately in a way that meets your research needs and provides comprehensive information.',
        metricDescriptions: [
            'The question should prompt a response that is factually accurate and complete',
            'The question should prompt a response that meets the user\'s research needs',
            'The question should prompt a response that is clear and well-organized'
        ],
        validations: [
            'Factuality: Accurate + complete extraction',
            'User Satisfaction: Meets research needs',
            'Clarity: Clear + well-organized information'
        ]
    },
    'synthesizing-literature': {
        title: 'Synthesizing Literature',
        definition: 'Summarizing, comparing studies, or automating literature reviews.',
        intent: 'Solve Professional Problem',
        criteria: ['Factuality', 'User Satisfaction', 'Clarity'],
        basicPrompt: 'Summarize these studies.',
        prompts: [
            'Summarize and compare these two studies accurately.',
            'Summarize and compare these two studies accurately, highlighting key differences that would be useful for your research.',
            'Summarize and compare these two studies clearly and accurately, highlighting key differences that would be useful for your research.'
        ],
        finalPrompt: 'Summarize and compare these two studies clearly and accurately, highlighting key differences that would be useful for your research and providing comprehensive analysis.',
        metricDescriptions: [
            'The question should prompt a response that is factually accurate and comprehensive',
            'The question should prompt a response that is useful for the user\'s research needs',
            'The question should prompt a response that is clear and well-structured'
        ],
        validations: [
            'Factuality: Accurate + comprehensive summary',
            'User Satisfaction: Useful for research needs',
            'Clarity: Clear + well-structured comparison'
        ]
    },
    'data-interpretation': {
        title: 'Data Interpretation',
        definition: 'Explaining data results or creating visual representations like graphs.',
        intent: 'Solve Professional Problem',
        criteria: ['Factuality', 'User Satisfaction', 'Clarity'],
        basicPrompt: 'Explain this data.',
        prompts: [
            'Explain trends and meaning in this data table accurately.',
            'Explain trends and meaning in this data table accurately in a way that meets your analysis needs.',
            'Explain trends and meaning in this data table clearly and accurately in a way that meets your analysis needs.'
        ],
        finalPrompt: 'Explain trends and meaning in this data table clearly and accurately in a way that meets your analysis needs and provides actionable insights.',
        metricDescriptions: [
            'The question should prompt a response that is factually accurate and correct',
            'The question should prompt a response that meets the user\'s analysis needs',
            'The question should prompt a response that is clear and understandable'
        ],
        validations: [
            'Factuality: Accurate + correct interpretation',
            'User Satisfaction: Meets analysis needs',
            'Clarity: Clear + understandable explanation'
        ]
    },
    'dataset-management': {
        title: 'Dataset Management',
        definition: 'Cleaning, formatting, or organizing datasets for analysis.',
        intent: 'Solve Professional Problem',
        criteria: ['Factuality', 'User Satisfaction', 'Clarity'],
        basicPrompt: 'Clean this dataset.',
        prompts: [
            'Help me clean missing values accurately and explain what changes you made.',
            'Help me clean missing values accurately in a way that meets your data analysis needs, and explain what changes you made.',
            'Help me clean missing values clearly and accurately in a way that meets your data analysis needs, and explain what changes you made.'
        ],
        finalPrompt: 'Help me clean missing values clearly and accurately in a way that meets your data analysis needs, and explain what changes you made with detailed documentation.',
        metricDescriptions: [
            'The question should prompt a response that is methodologically sound and accurate',
            'The question should prompt a response that meets the user\'s data analysis needs',
            'The question should prompt a response that clearly explains the process and changes'
        ],
        validations: [
            'Factuality: Methodologically sound + accurate cleaning',
            'User Satisfaction: Meets data analysis needs',
            'Clarity: Clear explanation + detailed documentation'
        ]
    },
    'writing-refinement': {
        title: 'Writing Refinement',
        definition: 'Polishing text, correcting grammar, or drafting abstracts and summaries.',
        intent: 'Text Assistant',
        criteria: ['Clarity', 'User Satisfaction', 'Logical Coherence'],
        basicPrompt: 'Polish this text.',
        prompts: [
            'Write a clear, concise abstract that accurately reflects the main findings.',
            'Write a clear, concise abstract that accurately reflects the main findings and meets your publication needs.',
            'Write a clear, concise abstract that accurately reflects the main findings, meets your publication needs, and follows logical structure.'
        ],
        finalPrompt: 'Write a clear, concise abstract that accurately reflects the main findings, meets your publication needs, and follows logical structure with coherent flow.',
        metricDescriptions: [
            'The question should prompt a response that is clear and easy to understand',
            'The question should prompt a response that meets the user\'s publication requirements',
            'The question should prompt a response that has logical structure and coherent flow'
        ],
        validations: [
            'Clarity: Clear + easy to understand',
            'User Satisfaction: Meets publication requirements',
            'Logical Coherence: Logical structure + coherent flow'
        ]
    },
    'publishing-assistance': {
        title: 'Publishing Assistance',
        definition: 'Managing the publishing process or drafting communication with journals.',
        intent: 'Ask for Advice',
        criteria: ['User Satisfaction', 'Factuality', 'Fairness and Responsibility'],
        basicPrompt: 'Draft a response to reviewers.',
        prompts: [
            'Draft a respectful reply to a reviewer\'s comment that meets your needs.',
            'Draft a respectful, accurate reply to a reviewer\'s comment that meets your needs.',
            'Draft a respectful, accurate reply to a reviewer\'s comment that meets your needs with fair and responsible tone.'
        ],
        finalPrompt: 'Draft a respectful, accurate reply to a reviewer\'s comment that meets your needs with fair and responsible tone, addressing all concerns professionally.',
        metricDescriptions: [
            'The question should prompt a response that meets the author\'s communication needs',
            'The question should prompt a response that is factually accurate and well-informed',
            'The question should prompt a response that has fair, respectful, and professionally responsible tone'
        ],
        validations: [
            'User Satisfaction: Meets communication needs',
            'Factuality: Accurate + well-informed response',
            'Fairness and Responsibility: Fair + professionally responsible tone'
        ]
    },
    'dissemination-outreach': {
        title: 'Dissemination and Outreach',
        definition: 'Translating research for broader audiences or improving accessibility.',
        intent: 'Seek Creativity',
        criteria: ['User Satisfaction', 'Logical Coherence', 'Creativity'],
        basicPrompt: 'Adapt this for general audience.',
        prompts: [
            'Adapt this abstract for a general audience in a way that meets your outreach goals.',
            'Adapt this abstract for a general audience with logical structure that meets your outreach goals.',
            'Adapt this abstract for a general audience with engaging, creative structure that meets your outreach goals.'
        ],
        finalPrompt: 'Adapt this abstract for a general audience with engaging, creative structure that meets your outreach goals and makes complex research accessible.',
        metricDescriptions: [
            'The question should prompt a response that meets the user\'s outreach and communication goals',
            'The question should prompt a response that maintains logical structure and scientific accuracy',
            'The question should prompt a response that is creative and engaging for general audiences'
        ],
        validations: [
            'User Satisfaction: Meets outreach goals',
            'Logical Coherence: Logical structure + scientific accuracy',
            'Creativity: Creative + engaging for general audiences'
        ]
    },
    'ethical-integrity': {
        title: 'Ethical and Integrity Assurance',
        definition: 'Checking for plagiarism, ethical issues, or potential research risks.',
        intent: 'Ask for Advice',
        criteria: ['User Satisfaction', 'Factuality', 'Fairness and Responsibility'],
        basicPrompt: 'Check for ethical issues.',
        prompts: [
            'Identify potential research risks in this proposal that would be helpful for your review.',
            'Identify potential research risks in this proposal with accurate assessment that would be helpful for your review.',
            'Identify potential research risks in this proposal with accurate and fair feedback that would be helpful for your review.'
        ],
        finalPrompt: 'Identify potential research risks in this proposal with accurate and fair feedback that would be helpful for your review, ensuring responsible research practices.',
        metricDescriptions: [
            'The question should prompt a response that is helpful for the user\'s review process',
            'The question should prompt a response that is factually accurate and well-informed',
            'The question should prompt a response that is fair, balanced, and promotes responsible practices'
        ],
        validations: [
            'User Satisfaction: Helpful for review process',
            'Factuality: Accurate + well-informed assessment',
            'Fairness and Responsibility: Fair + promotes responsible practices'
        ]
    }
};

// Current step tracking
let currentStep = 1;
let currentFunctionKey = '';

// DOM Elements
const modal = document.getElementById('functionModal');
const closeBtn = document.querySelector('.close');
const backToTopBtn = document.getElementById('backToTop');

// Function to show modal with step-by-step process
function showModal(data, functionKey) {
    currentFunctionKey = functionKey;
    currentStep = 1;
    
    // Set title
    document.getElementById('modalTitle').textContent = data.title;
    
    // Populate step 1
    document.getElementById('alignedIntent').textContent = data.intent;
    document.getElementById('basicPrompt').textContent = data.basicPrompt;
    
    // Populate steps 2-4 with metrics
    for (let i = 0; i < 3; i++) {
        document.getElementById(`metric${i+1}Name`).textContent = data.criteria[i];
        document.getElementById(`metric${i+1}Description`).textContent = data.metricDescriptions[i];
        document.getElementById(`updatedPrompt${i+1}`).textContent = data.prompts[i];
    }
    
    // Populate step 5
    document.getElementById('finalPrompt').textContent = data.finalPrompt;
    for (let i = 0; i < 3; i++) {
        document.getElementById(`validation${i+1}`).textContent = data.validations[i];
    }
    
    // Show modal and first step
    modal.style.display = 'block';
    showStep(1);
    document.body.style.overflow = 'hidden';
}

// Function to show specific step
function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.modal-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    document.getElementById(`step${stepNumber}`).classList.add('active');
    currentStep = stepNumber;
}

// Navigation functions
function nextStep() {
    if (currentStep < 5) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

function restartSteps() {
    showStep(1);
}

// Close modal
function closeModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Reset to first step for next time
        currentStep = 1;
        showStep(1);
    }, 300);
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all function cards
    const functionCards = document.querySelectorAll('.function-card');
    functionCards.forEach(card => {
        card.addEventListener('click', function() {
            const functionKey = this.getAttribute('data-function');
            const data = functionData[functionKey];
            
            if (data) {
                showModal(data, functionKey);
            }
        });
        
        // Add hover effect enhancement
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Modal close handlers
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Back to top button functionality
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add progress tracking
    trackProgress();
});

// Progress tracking functionality
function trackProgress() {
    const cards = document.querySelectorAll('.function-card');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Initialize cards for animation
    cards.forEach(card => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0.8';
        card.style.transition = 'all 0.6s ease';
        
        observer.observe(card);
    });
}

// Make function cards focusable for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.function-card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Learn more about ${card.querySelector('h3').textContent}`);
    });
});
