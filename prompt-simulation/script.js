// AI Prompt Simulation JavaScript

class PromptSimulation {
    constructor() {
        this.selectedIntent = null;
        this.currentEnhancement = null;
        this.isEnhanced = false;
        this.basePrompts = {
            spark: "Help me brainstorm creative research ideas about sustainable technology.",
            shape: "I have some thoughts about AI ethics. Help me organize them into a coherent research framework.",
            verify: "Can you help me fact-check information about climate change statistics?"
        };
        
        this.enhancedPrompts = {
            spark: {
                specificity: "Help me brainstorm 5 specific, innovative research ideas about sustainable technology applications in urban transportation, focusing on technologies that could be implemented within the next 5 years.",
                context: "I'm a graduate student in Environmental Engineering working on my thesis. Help me brainstorm creative research ideas about sustainable technology that address current gaps in urban sustainability research and could contribute to policy recommendations.",
                structure: "Help me brainstorm creative research ideas about sustainable technology. Please organize your response into: 1) Emerging technologies, 2) Implementation challenges, 3) Potential research questions, and 4) Expected outcomes."
            },
            shape: {
                specificity: "I have thoughts about AI bias, algorithmic transparency, and human oversight in AI systems. Help me organize these concepts into a specific research framework for studying ethical AI implementation in healthcare settings.",
                context: "I'm researching AI ethics for my PhD dissertation in Computer Science. I have some preliminary thoughts about fairness, accountability, and transparency. Help me organize them into a coherent research framework that could guide a 3-year research project.",
                structure: "I have some thoughts about AI ethics. Help me organize them into a coherent research framework with the following structure: 1) Core ethical principles, 2) Research questions, 3) Methodology, 4) Expected contributions, and 5) Timeline."
            },
            verify: {
                specificity: "Can you help me fact-check the claim that 'global CO2 levels have increased by 40% since 1990' and verify what the actual percentage increase has been, including the most recent data and reliable sources?",
                context: "I'm writing an academic paper on climate policy and need to verify climate change statistics. Can you help me fact-check information about CO2 level changes since 1990, including peer-reviewed sources and official climate organization data?",
                structure: "Can you help me fact-check information about climate change statistics by providing: 1) The verified facts with exact numbers, 2) Primary sources (IPCC, NOAA, etc.), 3) Any conflicting data or methodological differences, and 4) Recommendations for the most reliable sources?"
            }
        };
        
        this.baseResponses = {
            spark: `Here are some creative research ideas for sustainable technology:

1. Smart Grid Integration: Developing AI-powered energy distribution systems that optimize renewable energy usage in real-time.

2. Bio-based Materials: Creating biodegradable electronics using organic compounds that maintain functionality while reducing e-waste.

3. Carbon Capture Innovation: Designing portable atmospheric processors that can be integrated into existing urban infrastructure.

4. Sustainable Computing: Exploring quantum computing applications that significantly reduce energy consumption in data centers.

These ideas could open new research directions in environmental technology.`,

            shape: `Here's a framework to organize your AI ethics thoughts:

**Core Principles**
- Fairness and non-discrimination in AI decision-making
- Transparency in algorithmic processes
- Human oversight and accountability

**Key Research Areas**
- Bias detection and mitigation strategies
- Explainable AI development
- Human-AI collaboration models

**Implementation Considerations**
- Regulatory frameworks and compliance
- Technical standards and best practices
- Stakeholder engagement and social acceptance

This framework provides a foundation for systematic investigation of AI ethics across multiple dimensions.`,

            verify: `Based on current climate data, here are the verified facts about CO2 levels:

**Key Statistics:**
- Global atmospheric CO2 levels have increased from approximately 354 ppm in 1990 to 421 ppm in 2023
- This represents an increase of about 19%, not 40%

**Reliable Sources:**
- NOAA Global Monitoring Laboratory
- Scripps Institution of Oceanography
- IPCC Assessment Reports

**Important Context:**
- The 40% figure may refer to the increase since pre-industrial times (1880s)
- Different measurement methods and timeframes can produce varying statistics

Always verify specific timeframes and measurement methodologies when citing climate statistics.`
        };
        
        this.enhancedResponses = {
            spark: {
                specificity: `Here are 5 specific, innovative research ideas for sustainable urban transportation technology:

**1. Kinetic Energy Recovery in Public Transit**
Research regenerative braking systems for buses that capture 85%+ of kinetic energy, with implementation pilot by 2026-2027.

**2. Solar-Integrated Bus Stops**
Develop smart bus shelters with integrated photovoltaic panels that power real-time transit information and phone charging stations.

**3. AI-Optimized Traffic Flow for EVs**
Create machine learning algorithms that prioritize electric vehicle routes to reduce energy consumption by 15-20% in city centers.

**4. Modular Electric Bike Infrastructure**
Design standardized, stackable charging stations for e-bikes that can be rapidly deployed and relocated based on usage patterns.

**5. Waste-to-Energy Transit Power**
Investigate converting municipal waste into hydrogen fuel for public transportation fleets, targeting 30% energy self-sufficiency.

Each idea includes specific metrics, implementation timelines, and measurable outcomes suitable for graduate-level research.`,

                context: `As an Environmental Engineering graduate student, here are creative sustainable technology research ideas that address current urban sustainability gaps and could inform policy:

**Addressing Research Gaps:**

1. **Smart Stormwater Management**: Develop IoT-enabled green infrastructure that automatically adjusts water retention based on weather forecasts, addressing the gap in adaptive urban water systems.

2. **Building-Integrated Renewable Systems**: Research hybrid solar-wind micro-generation for high-rise buildings, filling the policy gap for mandatory renewable energy in urban construction codes.

3. **Circular Economy Transportation**: Design closed-loop vehicle sharing systems where maintenance waste becomes input for infrastructure materials, addressing the linear consumption model in transportation policy.

**Policy Contribution Potential:**
- Quantifiable environmental impact metrics for urban planning decisions
- Cost-benefit analyses for municipal sustainability investments
- Regulatory framework recommendations for emerging green technologies

These research directions directly support evidence-based environmental policy development while advancing urban sustainability science.`,

                structure: `Here are creative research ideas about sustainable technology, organized systematically:

**1. EMERGING TECHNOLOGIES**
- Atmospheric water generation using solar power
- Algae-based carbon capture integrated into building facades
- Piezoelectric energy harvesting from foot traffic
- Smart material buildings that adapt to environmental conditions

**2. IMPLEMENTATION CHALLENGES**
- High initial investment costs and ROI uncertainty
- Integration with existing urban infrastructure
- Regulatory approval processes for novel technologies
- Public acceptance and behavioral change requirements

**3. POTENTIAL RESEARCH QUESTIONS**
- How can biomimetic design principles improve urban energy efficiency?
- What policy mechanisms best accelerate sustainable technology adoption?
- How do social factors influence green technology implementation success?
- What metrics best measure long-term environmental impact?

**4. EXPECTED OUTCOMES**
- 20-30% reduction in urban carbon footprint
- New frameworks for sustainable city planning
- Policy recommendations for green technology incentives
- Scalable models for global urban sustainability initiatives`
            },
            shape: {
                specificity: `Here's a specific research framework for AI ethics in healthcare settings:

**Research Focus: Ethical AI Implementation in Healthcare**

**Core Ethical Framework:**
- **AI Bias in Medical Diagnosis**: How demographic factors affect diagnostic accuracy across patient populations
- **Algorithmic Transparency**: Ensuring healthcare providers can understand and explain AI-driven medical recommendations
- **Human Oversight Protocols**: Defining when human intervention is required in AI-assisted medical decisions

**Specific Research Questions:**
1. How do AI diagnostic tools perform across different ethnic and socioeconomic patient groups?
2. What level of algorithmic explanation is necessary for informed patient consent?
3. How can healthcare systems maintain human accountability in AI-assisted treatments?

**Methodology:**
- Retrospective analysis of AI diagnostic outcomes by patient demographics
- Surveys of healthcare providers on AI transparency needs
- Case studies of successful human-AI collaboration in medical settings

**Expected Contributions:**
- Guidelines for bias-free medical AI implementation
- Transparency standards for healthcare AI systems
- Best practices for human-AI collaboration in clinical settings

This framework provides concrete research directions for your 3-year healthcare AI ethics investigation.`,

                context: `As a Computer Science PhD student researching AI ethics, here's a comprehensive framework for your 3-year research project:

**Research Context: AI Ethics for Long-term Academic Investigation**

**Foundation: Your Preliminary Concepts**
- **Fairness**: Algorithmic bias detection and mitigation across demographic groups
- **Accountability**: Clear responsibility chains in AI decision-making systems
- **Transparency**: Explainable AI that enables human understanding and oversight

**3-Year Research Framework:**

**Year 1: Theoretical Foundation**
- Comprehensive literature review of AI ethics frameworks
- Development of your unique ethical AI assessment methodology
- Pilot studies on bias detection in existing AI systems

**Year 2: Empirical Investigation**
- Large-scale studies on algorithmic fairness across industries
- Development and testing of transparency enhancement tools
- Case studies of successful ethical AI implementations

**Year 3: Framework Validation & Dissemination**
- Validation of your ethical AI framework through real-world applications
- Policy recommendation development based on research findings
- Publication of dissertation and academic papers

**Expected Academic Contributions:**
- Novel framework for comprehensive AI ethics assessment
- Empirical evidence on effective bias mitigation strategies
- Policy-ready recommendations for ethical AI governance

This structured approach ensures systematic progress toward your PhD goals while contributing meaningfully to the AI ethics field.`,

                structure: `Here's your AI ethics thoughts organized into a comprehensive research framework:

**1. CORE ETHICAL PRINCIPLES**
- **Fairness**: Ensuring AI systems treat all users equitably regardless of protected characteristics
- **Accountability**: Establishing clear responsibility for AI decisions and outcomes
- **Transparency**: Making AI processes understandable to users and stakeholders
- **Privacy**: Protecting individual data rights in AI system operations
- **Human Agency**: Maintaining meaningful human control over AI-driven decisions

**2. RESEARCH QUESTIONS**
- How can we systematically identify and eliminate bias in AI training data?
- What transparency mechanisms best serve different stakeholder needs?
- How do we balance AI efficiency with human oversight requirements?
- What governance structures best ensure AI accountability?

**3. METHODOLOGY**
- Mixed-methods approach combining quantitative bias analysis and qualitative stakeholder interviews
- Comparative case studies of ethical AI implementations across industries
- Development and testing of new bias detection algorithms
- Longitudinal studies of AI ethics intervention effectiveness

**4. EXPECTED CONTRIBUTIONS**
- Comprehensive framework for AI ethics assessment and implementation
- Tools and methodologies for bias detection and mitigation
- Policy recommendations for AI governance and regulation
- Best practices guide for ethical AI development

**5. TIMELINE**
- Months 1-6: Literature review and framework development
- Months 7-18: Empirical research and data collection
- Months 19-30: Analysis, validation, and dissemination
- Months 31-36: Final framework refinement and publication`
            },
            verify: {
                specificity: `Here's the fact-check on CO2 level changes since 1990 with specific verification:

**FACT-CHECK RESULTS:**

**The Claim**: "Global CO2 levels have increased by 40% since 1990"
**Verdict**: PARTIALLY INCORRECT - The actual increase is approximately 19%

**Verified Facts:**
- 1990 CO2 level: 354.39 ppm (parts per million)
- 2023 CO2 level: 421.08 ppm  
- Actual increase: 66.69 ppm (18.8% increase)
- NOT 40% as claimed

**Most Recent Data (2024):**
- Current atmospheric CO2: ~424 ppm
- This represents a 19.6% increase since 1990

**Reliable Sources for Verification:**
- NOAA Mauna Loa Observatory (primary atmospheric measurements)
- Global Carbon Atlas (comprehensive CO2 tracking)
- IPCC Sixth Assessment Report (peer-reviewed climate data)

**Important Context:**
The 40% figure likely refers to the increase since pre-industrial times (1880s: ~280 ppm), which would be accurate. Always specify the baseline year when citing CO2 statistics.

**Recommended Citation**: "Atmospheric CO2 levels have increased by approximately 19% since 1990, from 354 ppm to 424 ppm (NOAA, 2024)."`,

                context: `Here's comprehensive fact-checking for your academic climate policy paper:

**FACT-CHECK: Climate Change Statistics Since 1990**

**For Academic Paper Context:**

**Verified CO2 Data for Policy Research:**
- 1990: 354.39 ppm (NOAA baseline)
- 2024: 424.05 ppm (latest available)
- Increase: 19.7% over 34 years
- Annual average increase: ~0.58%

**Peer-Reviewed Sources for Academic Citation:**
1. **IPCC Sixth Assessment Report (2023)**: Most authoritative climate science compilation
2. **NOAA Global Monitoring Laboratory**: Primary atmospheric measurement data
3. **Global Carbon Project**: Annual CO2 budget analysis with peer review
4. **Nature Climate Change**: Recent studies on CO2 trend analysis

**Official Climate Organization Data:**
- **IPCC**: Provides policy-ready summaries with high confidence intervals
- **UNFCCC**: Official emissions reporting standards for international climate agreements
- **WMO Greenhouse Gas Bulletin**: Annual official atmospheric composition reports

**Methodological Considerations for Academic Use:**
- Different measurement stations show <1% variation in global averages
- Seasonal variations require annual averaging for trend analysis
- Uncertainty margins: ±0.1 ppm for modern measurements

**Recommended Academic Practice:**
Use IPCC data as primary source, cross-reference with NOAA for specific measurements, and cite methodology used for temporal comparisons.

This approach ensures your climate policy paper meets academic standards for scientific accuracy and source reliability.`,

                structure: `Here's structured fact-checking for climate change statistics:

**1. VERIFIED FACTS WITH EXACT NUMBERS**
**CO2 Atmospheric Concentrations:**
- 1990: 354.39 ppm
- 2000: 369.55 ppm  
- 2010: 389.90 ppm
- 2024: 424.05 ppm
- **Total increase since 1990: 19.7% (NOT 40%)**

**Rate of Change:**
- 1990s average: +1.5 ppm/year
- 2000s average: +2.0 ppm/year  
- 2010s average: +2.4 ppm/year
- Current trend: +2.5 ppm/year

**2. PRIMARY SOURCES (OFFICIAL ORGANIZATIONS)**
- **IPCC (Intergovernmental Panel on Climate Change)**: Comprehensive assessment reports
- **NOAA Global Monitoring Laboratory**: Direct atmospheric measurements from Mauna Loa
- **WMO (World Meteorological Organization)**: Annual greenhouse gas bulletins
- **Global Carbon Project**: Peer-reviewed annual carbon budget analysis

**3. CONFLICTING DATA & METHODOLOGICAL DIFFERENCES**
**Potential Variations:**
- Measurement location differences: <1% variation between stations
- Seasonal adjustments: ±6 ppm annual cycle removed from trend data
- Data smoothing: Some sources use 12-month running averages

**The 40% Confusion:**
- Pre-industrial baseline (1880): ~280 ppm to 2024: 424 ppm = 51% increase
- Some sources may use different baseline years
- Regional vs. global measurements can vary

**4. MOST RELIABLE SOURCE RECOMMENDATIONS**
**Primary Recommendation**: IPCC Assessment Reports
- Synthesize all major measurement programs
- Include uncertainty analysis and confidence intervals
- Undergo extensive peer review process

**For Real-time Data**: NOAA Mauna Loa Observatory
**For Policy Context**: UNFCCC National Communications
**For Academic Research**: Global Carbon Project annual publications`
            }
        };
        
        this.enhancementDescriptions = {
            specificity: "Added specific numbers, timeframes, and measurable outcomes to make the request more precise and actionable.",
            context: "Provided background information about the user's situation, goals, and constraints to help AI give more relevant, tailored responses.",
            structure: "Requested a specific format and organization to make the response easier to follow and more useful for the intended purpose."
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
    }
    
    bindEvents() {
        // Suggestion card clicks
        document.querySelectorAll('.suggestion-card').forEach(card => {
            card.addEventListener('click', (e) => this.handleSuggestionClick(e));
        });
        
        // Back buttons
        document.getElementById('backButton').addEventListener('click', () => this.showStartScreen());
        
        // Enhancement buttons
        document.querySelectorAll('.try-enhancement-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleEnhancementClick(e));
        });
        
        // Reset button
        const resetBtn = document.getElementById('resetEnhancement');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetEnhancement());
        }
    }
    
    handleSuggestionClick(e) {
        const card = e.currentTarget;
        this.selectedIntent = card.dataset.intent;
        this.showConversationScreen();
    }
    
    handleEnhancementClick(e) {
        const option = e.target.closest('.enhancement-option');
        this.currentEnhancement = option.dataset.enhancement;
        this.applyEnhancement();
    }
    
    applyEnhancement() {
        if (!this.selectedIntent || !this.currentEnhancement) return;
        
        // Mark as enhanced
        this.isEnhanced = true;
        
        // Update UI to show active enhancement
        document.querySelectorAll('.enhancement-option').forEach(opt => {
            opt.classList.remove('active');
            const btn = opt.querySelector('.try-enhancement-btn');
            btn.textContent = 'Try This Enhancement';
            btn.disabled = false;
        });
        
        const currentOption = document.querySelector(`[data-enhancement="${this.currentEnhancement}"]`);
        currentOption.classList.add('active');
        const currentBtn = currentOption.querySelector('.try-enhancement-btn');
        currentBtn.textContent = 'Applied ✓';
        currentBtn.disabled = true;
        
        // Show enhancement info
        const enhancementInfo = document.getElementById('enhancementInfo');
        const enhancementDescription = document.getElementById('enhancementDescription');
        enhancementInfo.style.display = 'block';
        enhancementDescription.textContent = this.enhancementDescriptions[this.currentEnhancement];
        
        // Update prompt with highlighting
        this.updatePromptWithEnhancement();
        
        // Update response
        this.updateResponseWithEnhancement();
    }
    
    updatePromptWithEnhancement() {
        const userPrompt = document.getElementById('userPrompt');
        const originalPrompt = this.basePrompts[this.selectedIntent];
        const enhancedPrompt = this.enhancedPrompts[this.selectedIntent][this.currentEnhancement];
        
        // Highlight the additions/changes
        const highlightedPrompt = this.highlightPromptChanges(originalPrompt, enhancedPrompt);
        userPrompt.innerHTML = highlightedPrompt;
    }
    
    updateResponseWithEnhancement() {
        const aiResponse = document.getElementById('aiResponse');
        const enhancedResponse = this.enhancedResponses[this.selectedIntent][this.currentEnhancement];
        
        // Show enhanced response with some highlighting for key improvements
        aiResponse.innerHTML = this.highlightResponseChanges(enhancedResponse);
    }
    
    highlightPromptChanges(original, enhanced) {
        // Simple highlighting - identify new content
        const originalWords = original.toLowerCase().split(' ');
        const enhancedWords = enhanced.split(' ');
        
        return enhancedWords.map(word => {
            const cleanWord = word.toLowerCase().replace(/[^\w]/g, '');
            if (cleanWord.length > 3 && !originalWords.some(origWord => origWord.includes(cleanWord))) {
                return `<span class="highlight-addition">${word}</span>`;
            }
            return word;
        }).join(' ');
    }
    
    highlightResponseChanges(response) {
        // Highlight specific improvements in the response
        return response
            .replace(/(\d+[%.]|\d+ [a-zA-Z]+|\d+:\d+|\d{4}[-/]\d{2}[-/]\d{2})/g, '<span class="highlight-addition">$1</span>')
            .replace(/(specific|detailed|concrete|evidence|data|research|framework|methodology)/gi, '<span class="highlight-change">$1</span>');
    }
    
    resetEnhancement() {
        this.isEnhanced = false;
        this.currentEnhancement = null;
        
        // Reset UI
        document.querySelectorAll('.enhancement-option').forEach(opt => {
            opt.classList.remove('active');
            const btn = opt.querySelector('.try-enhancement-btn');
            btn.textContent = 'Try This Enhancement';
            btn.disabled = false;
        });
        
        // Hide enhancement info
        document.getElementById('enhancementInfo').style.display = 'none';
        
        // Reset to original prompt and response
        this.populateConversation();
    }
    
    showStartScreen() {
        document.getElementById('startScreen').style.display = 'flex';
        document.getElementById('conversationScreen').style.display = 'none';
        this.selectedIntent = null;
        this.currentEnhancement = null;
        this.isEnhanced = false;
    }
    
    showConversationScreen() {
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('conversationScreen').style.display = 'flex';
        
        if (this.selectedIntent) {
            this.populateConversation();
        }
    }
    
    populateConversation() {
        const userPrompt = document.getElementById('userPrompt');
        const aiResponse = document.getElementById('aiResponse');
        
        if (this.isEnhanced && this.currentEnhancement) {
            // Show enhanced versions
            this.updatePromptWithEnhancement();
            this.updateResponseWithEnhancement();
        } else {
            // Show original versions
            userPrompt.textContent = this.basePrompts[this.selectedIntent];
            aiResponse.textContent = this.baseResponses[this.selectedIntent];
        }
    }
}

// Initialize the simulation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PromptSimulation();
});
