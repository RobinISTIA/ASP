﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace pam_metier_simule.Metier.entites
{
  class FeuilleSalaire
  {
    // propriétés automatiques
    public Employe Employe { get; set; }
    public Cotisations Cotisations { get; set; }
    public ElementsSalaire ElementsSalaire { get; set; }
    // ToString
    public override string ToString()
    {
      return string.Format("[{0},{1},{2}]", Employe, Cotisations, ElementsSalaire);
    }
  }
}
