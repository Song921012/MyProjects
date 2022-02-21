from pathlib import Path
import streamlit as st


def read_markdown_file(markdown_file):
    return Path(markdown_file).read_text(encoding='UTF-8')


# Basic Theory
bayesian = read_markdown_file("BasicTheory\Main_bayesian.md")
dynamic_system = read_markdown_file("BasicTheory\Main_dynamic_system.md")
graph_theory = read_markdown_file("BasicTheory\Main_graph_theory.md")
numerical = read_markdown_file("BasicTheory\Main_numerical.md")
optimal = read_markdown_file("BasicTheory\Main_optimal.md")
spectral_theory = read_markdown_file("BasicTheory\Main_spectral_theory.md")

# Complex Networks
network = read_markdown_file("ComplexNetworks\Main_Complex_Networks.md")

# Evolution
evolution = read_markdown_file("Evolution\Main_Evolution.md")

# Machine Learning
MLDE = read_markdown_file("MachineLearning\Main_differential_equation_ML.md")

# ODESDEPDE
dde = read_markdown_file("ODESDEDDE\Main_dde.md")
ode = read_markdown_file("ODESDEDDE\Main_ode.md")
sde = read_markdown_file("ODESDEDDE\Main_sde.md")
discontinous = read_markdown_file("ODESDEDDE\Main_discontinous.md")

# PDE
free_boundary = read_markdown_file("PDE\Main_free_boundary.md")
Nonlocal = read_markdown_file("PDE\Main_nonlocal.md")
periodic = read_markdown_file("PDE\Main_periodic.md")
spatial_heterogeneity = read_markdown_file("PDE\Main_spatial_heterogeneity.md")
structure = read_markdown_file("PDE\Main_structure.md")
travelling_wave = read_markdown_file("PDE\Main_travelling_wave.md")

# Mulstiscale Modelling
agents = read_markdown_file("MultiscaleModelling\Main_agents.md")
specific_disease = read_markdown_file(
    "MultiscaleModelling\Main_specific_disease.md")
withinhost = read_markdown_file("MultiscaleModelling\Main_withinhost.md")

# PreciseEpidemicControl
economics = read_markdown_file("PreciseEpidemicControl\Main_economics.md")
health_resource = read_markdown_file(
    "PreciseEpidemicControl\Main_health_resource.md")
host_control = read_markdown_file(
    "PreciseEpidemicControl\Main_host_control.md")
human_behaviour = read_markdown_file(
    "PreciseEpidemicControl\Main_human_behaviours.md")
isolation_tracing_testing = read_markdown_file(
    "PreciseEpidemicControl\Main_isolation_tracing_testing.md")
lockdown = read_markdown_file("PreciseEpidemicControl\Main_lockdown.md")
vaccine = read_markdown_file("PreciseEpidemicControl\Main_vaccine.md")

PAGES = {
    "Bayesian":
    st.markdown(bayesian, unsafe_allow_html=True),
    "Dynamic Systems":
    st.markdown(dynamic_system, unsafe_allow_html=True),
    "Graph Theory":
    st.markdown(graph_theory, unsafe_allow_html=True),
    "Numerical Simulations":
    st.markdown(numerical, unsafe_allow_html=True),
    "Optimal":
    st.markdown(optimal, unsafe_allow_html=True),
    "Spectral Theory":
    st.markdown(spectral_theory, unsafe_allow_html=True),
    "ODE":
    st.markdown(ode, unsafe_allow_html=True),
    "DDE":
    st.markdown(dde, unsafe_allow_html=True),
    "SDE":
    st.markdown(sde, unsafe_allow_html=True),
    "Discontionus Dynamics":
    st.markdown(discontinous, unsafe_allow_html=True),
    "Free Boundary":
    st.markdown(free_boundary, unsafe_allow_html=True),
    "Nonlocal":
    st.markdown(Nonlocal, unsafe_allow_html=True),
    "Periodic System":
    st.markdown(periodic, unsafe_allow_html=True),
    "Spatial Heterogeneity":
    st.markdown(spatial_heterogeneity, unsafe_allow_html=True),
    "Structure Models":
    st.markdown(structure, unsafe_allow_html=True),
    "Travelling Wave":
    st.markdown(travelling_wave, unsafe_allow_html=True),
    "Network":
    st.markdown(network, unsafe_allow_html=True),
    "Evolution":
    st.markdown(evolution, unsafe_allow_html=True),
    "MLDE":
    st.markdown(MLDE, unsafe_allow_html=True),
    "Agents Based Modelling":
    st.markdown(agents, unsafe_allow_html=True),
    "Within Host":
    st.markdown(withinhost, unsafe_allow_html=True),
    "Economics":
    st.markdown(economics, unsafe_allow_html=True),
    "Health Resource":
    st.markdown(health_resource, unsafe_allow_html=True),
    "Host Control":
    st.markdown(host_control, unsafe_allow_html=True),
    "Human Behaviour Changes":
    st.markdown(human_behaviour, unsafe_allow_html=True),
    "Isolation Tracing Testing":
    st.markdown(isolation_tracing_testing, unsafe_allow_html=True),
    "Lockdown":
    st.markdown(lockdown, unsafe_allow_html=True),
    "Vaccine":
    st.markdown(vaccine, unsafe_allow_html=True),
}


def main():
    st.sidebar.title("Pengfei's Group Projects")
    st.sidebar.title("Main Menu")
    choice = st.sidebar.radio("Navigate", list(PAGES.keys()))
    PAGES[choice].value
    st.sidebar.title("About")
    st.sidebar.info("""
        This app is maintained by Pengfei Song. You can learn more about me at
        [Song921012 (Pengfei Song)](https://github.com/Song921012).
        """)


if __name__ == "__main__":
    main()