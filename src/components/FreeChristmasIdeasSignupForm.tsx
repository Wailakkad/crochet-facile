import React, { useState } from 'react';
import { ArrowRight, Download, Loader2 } from 'lucide-react';
import {
  FREE_CHRISTMAS_IDEAS_PDF_URL,
  FREE_CHRISTMAS_IDEAS_SOURCE_TAG,
  GOOGLE_APPS_SCRIPT_SIGNUP_URL,
  isPlaceholder,
} from '../config/freeChristmasIdeasConfig';

const GENERIC_ERROR =
  "Une erreur est survenue lors de l'inscription. Merci de réessayer dans quelques instants.";

const CONFIG_ERROR =
  'Le formulaire est en cours de configuration. Merci de réessayer un peu plus tard.';

const PDF_PENDING_MESSAGE =
  'Le lien de téléchargement sera bientôt disponible. Merci de revenir plus tard.';

export const FreeChristmasIdeasSignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validate = (): boolean => {
    let valid = true;
    setNameError(null);
    setEmailError(null);

    if (!name.trim()) {
      setNameError('Merci d’indiquer ton prénom.');
      valid = false;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setEmailError('Merci d’indiquer une adresse e-mail valide.');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    if (isPlaceholder(GOOGLE_APPS_SCRIPT_SIGNUP_URL)) {
      setErrorMessage(CONFIG_ERROR);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_SIGNUP_URL, {
        method: 'POST',
        // text/plain is a CORS "simple request" content type: it skips the
        // OPTIONS preflight, which Google Apps Script web apps do not answer
        // with CORS headers. The body is still JSON, parsed server-side with
        // JSON.parse(e.postData.contents).
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          source: FREE_CHRISTMAS_IDEAS_SOURCE_TAG,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage(GENERIC_ERROR);
      }
    } catch {
      setErrorMessage(GENERIC_ERROR);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full rounded-[12px] border border-[#355748]/20 bg-white px-4 py-3.5 text-[15px] text-[#252525] placeholder:text-[#252525]/40 shadow-sm transition-colors focus:border-[#355748] focus:outline-none focus:ring-2 focus:ring-[#91B5A3]/40';

  if (isSuccess) {
    const pdfReady = !isPlaceholder(FREE_CHRISTMAS_IDEAS_PDF_URL);

    return (
      <div
        id="inscription"
        className="rounded-2xl border border-[#355748]/15 bg-white p-6 sm:p-10 shadow-[0_8px_32px_-8px_rgba(53,87,72,0.12)]"
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-4">
          C’est presque Noël ! 🎄
        </h2>
        <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed mb-8">
          Merci pour ton inscription. Ton lien de téléchargement est prêt :
        </p>

        {pdfReady ? (
          <>
            <a
              href={FREE_CHRISTMAS_IDEAS_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Télécharger le carnet (PDF)</span>
            </a>
            <p className="mt-5 text-xs text-[#252525]/60 leading-relaxed">
              Si rien ne s’ouvre, vérifie que ton navigateur n’a pas bloqué la fenêtre
              pop-up, ou copie-colle le lien dans un nouvel onglet.
            </p>
          </>
        ) : (
          <div className="rounded-[12px] border border-[#D8B876]/50 bg-[#D8B876]/10 px-4 py-3.5 text-sm text-[#252525]/80">
            {PDF_PENDING_MESSAGE}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      id="inscription"
      className="rounded-2xl border border-[#355748]/15 bg-white p-6 sm:p-10 shadow-[0_8px_32px_-8px_rgba(53,87,72,0.12)]"
    >
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <div>
            <label
              htmlFor="free-christmas-name"
              className="block text-sm font-semibold text-[#252525] mb-2"
            >
              Prénom
            </label>
            <input
              id="free-christmas-name"
              type="text"
              autoComplete="given-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex. Marie"
              className={inputClasses}
              aria-invalid={nameError !== null}
            />
            {nameError && (
              <p className="mt-2 text-xs text-[#A83E46]">{nameError}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="free-christmas-email"
              className="block text-sm font-semibold text-[#252525] mb-2"
            >
              Adresse e-mail
            </label>
            <input
              id="free-christmas-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton.email@example.com"
              className={inputClasses}
              aria-invalid={emailError !== null}
            />
            {emailError && (
              <p className="mt-2 text-xs text-[#A83E46]">{emailError}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#355748] hover:bg-[#284337] disabled:opacity-60 disabled:cursor-not-allowed text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <span>Recevoir le carnet gratuit</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>

        {errorMessage && (
          <p
            role="alert"
            className="mt-4 rounded-[10px] bg-[#A83E46]/8 border border-[#A83E46]/25 px-4 py-3 text-sm text-[#A83E46]"
          >
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};
