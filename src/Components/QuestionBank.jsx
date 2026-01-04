export const questionBank = [
    {
        id: 0,
        question: "Type of content being evaluated",
        options: [
            "Lifestyle",
            "Medical Advice", 
            "Other", 
        ],
        points: [2, 1, 0],
    },
    {
        id: 1,
        question: "Authorship & Credibility",
        options: [
            "Creator identifies themselves without misrepresentation (e.g., medical professional*, patient, advocate,, etc.) in the video or profile (2 Points)",
            "Some identity provided, but unclear in the video or profile (1 Point)", 
            "No identification, misleading credentials in the video or profile, or illegitimate creators (0 Points)", 
        ],
        points: [2, 1, 0],
    },
    {
        id: 2,
        question: "Transparency & Disclosure",
        options: [
            "Discloses ownership in the video or profile and, if applicable, lists any affiliations, sponsorships, conflicts of interest (2 Points)",
            "Content ownership, affiliations, sponsorships, or conflicts of interests are not fully disclosed, but are not suspicious (1 Point)", 
            "No transparency, possible hidden promotional interests, suspicious/misleading affiliations in profile or video (0 Points)", 
        ],
        points: [2, 1, 0],
    },
    {
        id: 3,
        question: "Content Intent & Accuracy",
        lifestyleOptions: [
            "Accurate & beneficial content, promotes understanding or healthier behavior (2 Points)",
            "Neutral content; does not positively educate of the viewer, may only be partially accurate, but does not spread false or harmful claims (1 Point)", 
            "Contains misleading, harmful, insulting, false, or dangerous health claims; OR relies on poor-quality or unverified sources (0 Points)",
        ],
        medicalAdviceOptions: [
            "Content is beneficial, accurate, evidence-based, AND either (a) cites credible sources (Peer-reviewed journals, UpToDate, etc.), OR (b) was made by a legitimate medical professional/institution (2 Points)",
            "Accurate and non-harmful, but lacks sources or credible authorship; little to no educational value (neutral) (1 Point)", 
            "Contains misleading, harmful, insulting, false, or dangerous health claims; OR relies on poor-quality or unverified sources (0 Points)",
        ],
        otherOptions: [
            "Harmless, no false or misleading claims; helpful info optional (2 Points)",
            "Harmless but has a minor factual inaccuracy or is outdated (1 Point)",
            "Contains misleading, harmful, insulting, false, or dangerous health claims; OR relies on poor-quality or unverified sources (0 Points)",
        ],
        points: [2, 1, 0],
    },
    {
        id: 4,
        question: "Accessibility & Clarity",
        options: [
            "Uses clear communication for the target audience (2 Points)",
            "Some jargon, partially understandable for the target audience (1 Point)", 
            "Overly technical or difficult to follow for the target audience (0 Points)", 
        ],
        points: [2, 1, 0],
    },
    {
        id: 5,
        question: "Relevance & Date",
        options: [
            "Clearly states the posting date and remains relevant (2 Points)",
            "Date is visible but content is outdated (1 Point)", 
            "No date shown (0 Points)", 
        ],
        points: [2, 1, 0],
    },
]

export const pointThreshold = 5;

export const contentTypeQuestion = {
        id: 0,
        question: "What type of content is this?",
        options: [
            "Lifestyle",
            "Medical Advice", 
            "Other", 
        ],
        points: [2, 1, 0],
    }

 export const contentTypeMap = {
      2: "Other",
      1: "Medical Advice",
      0: "Lifestyle"
    };

export const accuracyAssessment = ["This content is NOT accurate.", "This content is accurate."];
