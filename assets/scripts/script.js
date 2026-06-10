// ============================================
// CLIENT SETTINGS
// ============================================

const CLIENT = {
    phone: "19282073981",
    quoteForm: "https://YOUR-JOBBER-FORM-URL",
    businessName: "ABC Landscaping"
};

function openQuoteForm() {
    window.open(CLIENT.quoteForm, "_blank");
}