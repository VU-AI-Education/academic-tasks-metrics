# AI Prompt Simulation

An interactive educational tool that helps students explore how different prompt improvements affect AI-generated responses. This simulation demonstrates the impact of prompt engineering on response quality without requiring real AI API calls.

## Features

### Starting Screen
- Mimics the familiar AI assistant interface with "Hi! How can I help you today?"
- Three suggestion cards matching the interactive prompt builder:
  - **Spark New Ideas** - Get creative inspiration
  - **Shape My Thoughts** - Organize and refine concepts  
  - **Verify Facts** - Check accuracy and find sources

### Conversation Simulation
- **Left Panel**: Shows the conversation between user and AI
  - Displays the chosen prompt and corresponding AI response
  - Clean, chat-like interface that fits on one screen
- **Right Panel**: Enhancement options based on evaluation metrics
  - **Add Specificity** - Make requests more detailed and precise
  - **Provide Context** - Add background information and constraints
  - **Request Structure** - Ask for specific format or organization

### Enhancement Comparison
- **Side-by-side comparison** of original vs enhanced prompts
- **Highlighted changes** in the enhanced prompt
- **Response comparison** showing how improvements affect AI output
- **Change explanations** for both prompt and response modifications

## Educational Benefits

1. **Visual Learning**: Students see immediate cause-and-effect relationships between prompt changes and response quality
2. **No Scrolling**: All content fits on screen for easy comparison
3. **Real Examples**: Uses realistic academic prompts and responses
4. **Metric-Based**: Enhancements align with prompt evaluation criteria
5. **Interactive**: Students can explore different enhancement paths

## Usage Instructions

1. Open `index.html` in a web browser
2. Click on one of the three suggestion cards on the starting screen
3. View the conversation simulation with the base prompt and response
4. Click "Try This Enhancement" on any of the three enhancement options
5. Compare the original and enhanced versions
6. Use "Try Another Enhancement" or "Start Over" to explore more

## Technical Details

- **Pure HTML/CSS/JavaScript** - No external dependencies
- **Responsive design** - Works on desktop and mobile
- **VU Amsterdam color scheme** - Matches university branding
- **Realistic content** - All prompts and responses are educationally relevant

## File Structure

```
prompt-simulation/
├── index.html          # Main simulation interface
├── styles.css          # VU-branded styling
├── script.js           # Simulation logic and content
└── README.md           # This documentation
```

## Customization

To modify the simulation content:

1. **Prompts**: Edit the `basePrompts` object in `script.js`
2. **Responses**: Modify the `baseResponses` and `enhancedResponses` objects
3. **Enhancements**: Update the enhancement types in the HTML and corresponding logic
4. **Styling**: Adjust colors and layout in `styles.css`

## Browser Compatibility

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

No internet connection required - runs entirely offline.
