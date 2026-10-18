import React from 'react';
import { X, Mail, ShieldCheck, FileText } from 'lucide-react';
import { BRAND } from '../config/constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'cgv' | 'privacy' | 'mentions' | 'contact' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const contentMap = {
    cgv: {
      title: 'Conditions Générales de Vente (CGV)',
      icon: FileText,
      body: (
        <div className="space-y-4 text-sm text-[#252525]/85 leading-relaxed">
          <p>
            <strong>1. Objet :</strong> Les présentes conditions générales de vente régissent la vente du produit numérique « 4 Décorations de Noël au Crochet – Patrons PDF en Français » proposé par la marque Crochet Facile.
          </p>
          <p>
            <strong>2. Nature du produit :</strong> Le produit vendu est exclusivement un guide numérique téléchargeable au format PDF. Aucun produit physique (laine, crochet, décorations finies) n'est expédié par voie postale.
          </p>
          <p>
            <strong>3. Prix et Paiement :</strong> Le prix est fixé à 7,90 € TTC. Le règlement s'effectue en ligne via la plateforme sécurisée Payhip (cartes bancaires, PayPal).
          </p>
          <p>
            <strong>4. Livraison numérique :</strong> Dès la confirmation de commande, le lien de téléchargement immédiat du fichier PDF est mis à disposition de l'acheteur à l'écran et par courrier électronique.
          </p>
          <p>
            <strong>5. Droit de rétractation :</strong> Conformément aux dispositions de l'article L. 221-28 13° du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur.
          </p>
          <p>
            <strong>6. Propriété intellectuelle :</strong> Les patrons sont destinés à un usage personnel uniquement. Toute reproduction, revente ou diffusion publique non autorisée du fichier PDF est strictement interdite.
          </p>
        </div>
      ),
    },
    privacy: {
      title: 'Politique de Confidentialité',
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-sm text-[#252525]/85 leading-relaxed">
          <p>
            La protection de vos données personnelles est essentielle. Les informations collectées lors de votre commande (adresse e-mail pour l'envoi du fichier PDF) sont traitées de manière sécurisée par notre prestataire de paiement et de distribution numérique Payhip.
          </p>
          <p>
            <strong>Finalités :</strong> Vos données sont utilisées uniquement pour la délivrance du fichier numérique acheté et le support client en cas de difficulté de téléchargement.
          </p>
          <p>
            <strong>Transmission :</strong> Aucune donnée n'est vendue, louée ou cédée à des tiers à des fins publicitaires.
          </p>
          <p>
            <strong>Vos droits :</strong> Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles en nous écrivant à l'adresse support : {BRAND.supportEmail}.
          </p>
        </div>
      ),
    },
    mentions: {
      title: 'Mentions Légales',
      icon: FileText,
      body: (
        <div className="space-y-4 text-sm text-[#252525]/85 leading-relaxed">
          <p>
            <strong>Éditeur du site :</strong> Crochet Facile – Édition numérique d'artisanat textile et loisirs créatifs.
          </p>
          <p>
            <strong>Contact :</strong> {BRAND.supportEmail}
          </p>
          <p>
            <strong>Plateforme de paiement et livraison :</strong> Payhip Ltd. (infrastructure sécurisée de vente de produits numériques).
          </p>
          <p>
            <strong>Hébergement :</strong> Google Cloud Platform.
          </p>
          <p>
            <strong>Propriété intellectuelle :</strong> L'ensemble des textes, photographies, patrons et graphismes figurant sur ce site sont protégés par le droit d'auteur.
          </p>
        </div>
      ),
    },
    contact: {
      title: 'Contactez-nous',
      icon: Mail,
      body: (
        <div className="space-y-4 text-sm text-[#252525]/85 leading-relaxed">
          <p>
            Une question sur vos patrons ou besoin d'assistance pour télécharger votre PDF ?
          </p>
          <div className="p-4 rounded-xl bg-[#F7F3ED] border border-[#355748]/15 flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#355748]" />
            <div>
              <span className="text-xs text-[#252525]/70 block">Adresse e-mail de support :</span>
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="text-base font-semibold text-[#355748] hover:underline"
              >
                {BRAND.supportEmail}
              </a>
            </div>
          </div>
          <p className="text-xs text-[#252525]/70">
            Nous répondons généralement sous 24 à 48 heures ouvrées pour vous assister avec plaisir.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FFF9F2] rounded-2xl shadow-2xl border border-[#355748]/20 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#355748]/15 flex items-center justify-between bg-[#F7F3ED]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-[#252525]">
              {current.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#252525]/60 hover:text-[#252525] hover:bg-[#355748]/10 transition-colors"
            aria-label="Fermer la boîte de dialogue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">{current.body}</div>

        {/* Footer */}
        <div className="p-4 border-t border-[#355748]/10 bg-[#F7F3ED] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-[#355748] hover:bg-[#284337] rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
