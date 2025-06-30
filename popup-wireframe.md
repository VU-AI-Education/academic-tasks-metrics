# Pop-up Modal Wireframe - Progressive Prompt Building

## Modal Layout Concept

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                       ✕     │
│                        [FUNCTION NAME - e.g., Idea Generation]              │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                          STEP 1: ALIGNED INTENT                        │ │
│ │                                                                         │ │
│ │ Intent: Seek Creativity                                                 │ │
│ │                                                                         │ │
│ │ Basic Prompt:                                                           │ │
│ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ "Generate creative research questions."                             │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │                           [NEXT STEP →]                                 │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 2: First Evaluation Metric

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                       ✕     │
│                        [FUNCTION NAME - e.g., Idea Generation]              │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                    STEP 2: FIRST EVALUATION METRIC                     │ │
│ │                                                                         │ │
│ │ Metric 1: User Satisfaction                                             │ │
│ │                                                                         │ │
│ │ What this means: The response should be helpful and meet user needs     │ │
│ │                                                                         │ │
│ │ Updated Prompt:                                                         │ │
│ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ "Generate 3 creative research questions that would be helpful       │ │ │
│ │ │ for a researcher in [specific field]."                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │                    [← PREVIOUS]     [NEXT STEP →]                       │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 3: Second Evaluation Metric

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                       ✕     │
│                        [FUNCTION NAME - e.g., Idea Generation]              │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                   STEP 3: SECOND EVALUATION METRIC                     │ │
│ │                                                                         │ │
│ │ Metric 2: Logical Coherence                                             │ │
│ │                                                                         │ │
│ │ What this means: The questions should be logically structured and       │ │
│ │ scientifically sound                                                    │ │
│ │                                                                         │ │
│ │ Updated Prompt:                                                         │ │
│ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ "Generate 3 creative, logically structured research questions       │ │ │
│ │ │ that would be helpful for a researcher in [specific field].         │ │ │
│ │ │ Ensure each question is scientifically sound."                      │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │                    [← PREVIOUS]     [NEXT STEP →]                       │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 4: Third Evaluation Metric

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                       ✕     │
│                        [FUNCTION NAME - e.g., Idea Generation]              │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                    STEP 4: THIRD EVALUATION METRIC                     │ │
│ │                                                                         │ │
│ │ Metric 3: Creativity                                                   │ │
│ │                                                                         │ │
│ │ What this means: The questions should be innovative and explore new     │ │
│ │ angles or approaches                                                    │ │
│ │                                                                         │ │
│ │ Updated Prompt:                                                         │ │
│ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ "Generate 3 creative, logically structured research questions       │ │ │
│ │ │ that would be helpful for a researcher in [specific field].         │ │ │
│ │ │ Ensure each question is scientifically sound and explores           │ │ │
│ │ │ innovative angles or novel approaches."                              │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │                    [← PREVIOUS]     [FINAL EXAMPLE →]                   │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Step 5: Final Complete Example

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                       ✕     │
│                        [FUNCTION NAME - e.g., Idea Generation]              │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │                       STEP 5: COMPLETE EXAMPLE                         │ │
│ │                                                                         │ │
│ │ Final Optimized Prompt:                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ "Suggest 3 creative research questions on antimicrobial resistance │ │ │
│ │ │ in microbiology that would be helpful for a researcher. Ensure      │ │ │
│ │ │ each question is scientifically sound, logically structured, and    │ │ │
│ │ │ explores innovative angles or novel approaches in the field."       │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │ Why this works:                                                         │ │
│ │ ✓ User Satisfaction: Specific field + helpful focus                     │ │
│ │ ✓ Logical Coherence: Scientifically sound + structured                  │ │
│ │ ✓ Creativity: Innovative angles + novel approaches                      │ │
│ │                                                                         │ │
│ │                    [← PREVIOUS]     [START OVER]                        │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Design Notes:

### Visual Elements:
- **Quote Boxes**: Prompts are clearly visualized in bordered quote boxes
- **Step Progression**: Clear step numbers and navigation
- **Metric Explanations**: Each metric includes "What this means" context
- **Progressive Building**: Shows how each metric improves the prompt
- **Final Summary**: Checklist showing how all metrics are addressed

### Navigation:
- **Forward/Back Arrows**: Easy step-by-step navigation
- **Close Button**: ✕ in top-right corner
- **Start Over**: Return to beginning of process

### Color Scheme (Following your style guide):
- **Modal Background**: White
- **Step Headers**: Light Blue (148, 191, 221) background
- **Quote Boxes**: Light gray background with Steel Blue (149, 189, 220) border
- **Navigation Buttons**: Dark blue with white text
- **Checkmarks**: Green for final validation

### Interactive Features:
- **Smooth Transitions**: Between steps
- **Hover Effects**: On navigation buttons
- **Copy Button**: For final prompt (optional)
- **Example Variations**: Show different examples for different functions
