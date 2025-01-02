
// Level 3 Images
import aws from "$lib/images/technologies/amazon-web-services-icon.svg";
import digitalOcean from "$lib/images/technologies/digital_ocean.png";
import gcp from "$lib/images/technologies/google_cloud_platform.png";
import oracleCloud from "$lib/images/technologies/oracle-cloud.svg";
import azure from "$lib/images/technologies/azure.svg";
import uptimeKuma from "$lib/images/technologies/uptime-kuma.svg"
import jenkins from "$lib/images/technologies/jenkins.png";
import concourseCI from "$lib/images/technologies/concourse-ci.png";
import argoCD from "$lib/images/technologies/argocd.png";
import fleetCD from "$lib/images/technologies/Fleetcd.svg";
import ansible from "$lib/images/technologies/ansible.png";
import kubeImageKeeper from "$lib/images/technologies/kuik.png";
import reloader from "$lib/images/technologies/reloader.png";
import kafka from "$lib/images/technologies/kafka-apache.png";
import pulsar from "$lib/images/technologies/pulsar-apache.svg";
import rabbitMQ from "$lib/images/technologies/rabbitmq.svg";
import authentik from "$lib/images/technologies/authentik.svg";
import dex from "$lib/images/technologies/dexidp.png";
import angular from "$lib/images/technologies/angular.png";
import react from "$lib/images/technologies/react.png";

// 20
export const level3 = [
  { name: "React JS", url: react, alt: "React JS", link: "https://react.dev/" },
  { name: "AWS", url: aws, alt: "AWS", link: "https://aws.amazon.com/getting-started/?nc2=h_ls" },
  { name: "Digital Ocean", url: digitalOcean, alt: "Digital Ocean", link: "https://www.digitalocean.com/" },
  { name: "GCP", url: gcp, alt: "GCP", link: "https://cloud.google.com/" },
  { name: "Oracle Cloud", url: oracleCloud, alt: "Oracle Cloud", link: "https://www.oracle.com/in/cloud/" },
  { name: "Azure", url: azure, alt: "Azure", link: "https://azure.microsoft.com/en-in/free/cloud-services/" },
  { name: "UptimeKuma", url: uptimeKuma, alt: "UptimeKuma", link: "https://uptime.kuma.pet/" },
  { name: "Jenkins", url: jenkins, alt: "Jenkins", link: "https://www.jenkins.io/" },
  { name: "ConcourseCI", url: concourseCI, alt: "ConcourseCI", link: "https://concourse-ci.org/" },
  { name: "Argo CD", url: argoCD, alt: "Argo CD", link: "https://argoproj.github.io/cd/" },
  { name: "Fleet CD", url: fleetCD, alt: "Fleet CD", link: "https://fleet.rancher.io/" },
  { name: "Ansible", url: ansible, alt: "Ansible", link: "https://www.ansible.com/" },
  { name: "kuik", url: kubeImageKeeper, alt: "kube-image-keeper", link: "https://github.com/enix/kube-image-keeper" },
  { name: "Reloader", url: reloader, alt: "Reloader", link: "https://github.com/stakater/Reloader" },
  { name: "Kafka", url: kafka, alt: "Kafka", link: "https://kafka.apache.org/" },
  { name: "Pulsar", url: pulsar, alt: "Pulsar", link: "https://pulsar.apache.org/" },
  { name: "RabbitMQ", url: rabbitMQ, alt: "RabbitMQ", link: "https://www.rabbitmq.com/" },
  { name: "Authentik", url: authentik, alt: "Authentik", link: "https://github.com/goauthentik/authentik" },
  { name: "Dex", url: dex, alt: "Dex", link: "https://dexidp.io/" },
  { name: "Angular JS", url: angular, alt: "Angular JS", link: "https://angularjs.org/" },
];

// Level 2 Images
import docker from "$lib/images/technologies/docker.png"
import github from "$lib/images/technologies/github.png"
import gitlab from "$lib/images/technologies/gitlab.png"
import bitBucket from "$lib/images/technologies/bitbucket-icon.svg"
import forgejo from "$lib/images/technologies/forgejo.svg"
import githubActions from "$lib/images/technologies/github_actions.png"
import gitlabCI from "$lib/images/technologies/gitlab_ci.jpg"
import drone from "$lib/images/technologies/dron.svg"
import vault from "$lib/images/technologies/vault.svg"
import openTofu from "$lib/images/technologies/opentofu.png"
import proxmox from "$lib/images/technologies/proxmox.png"
import emqx from "$lib/images/technologies/emqx.png"
import zitadel from "$lib/images/technologies/zitadel.svg"
import oryKratos from "$lib/images/technologies/OryKratos.png"
import keycloak from "$lib/images/technologies/Keycloak.svg"
import mariadb from "$lib/images/technologies/mariadb-icon.svg"
import mongodb from "$lib/images/technologies/mongodb-icon.svg"
import mysql from "$lib/images/technologies/mysql.png"
import nodejs from "$lib/images/technologies/node.png"

// 19
export const level2 = [
    { name: "Docker", url: docker, alt: "Docker", link: "https://www.docker.com/"},
    { name: "Github", url: github, alt: "Github", link: "https://github.com/"},
    { name: "GitLab", url: gitlab, alt: "GitLab", link: "https://about.gitlab.com/"},
    { name: "BitBucket", url: bitBucket, alt: "BitBucket", link: "https://bitbucket.org/product"},
    { name: "Forgejo", url: forgejo, alt: "Forgejo", link: "https://forgejo.org/"},
    { name: "Github Actions", url: githubActions, alt: "Github Actions", link: "https://github.com/features/actions"},
    { name: "MysqlDB", url: mysql, alt: "MysqlDB", link: "https://www.mysql.com/"},
    { name: "Nodejs", url: nodejs, alt: "Nodejs", link: "https://nodejs.org/en"},
    { name: "GitLab CI", url: gitlabCI, alt: "GitLab CI", link: "https://docs.gitlab.com/ee/ci/"},
    { name: "MariaDB", url: mariadb, alt: "MariaDB", link: "https://mariadb.org/"},
    { name: "Vault", url: vault, alt: "Vault - Hashi Corp", link: "https://www.vaultproject.io/"},
    { name: "Open Tofu", url: openTofu, alt: "Open Tofu", link: "https://opentofu.org/"},
    { name: "Proxmox", url: proxmox, alt: "Proxmox", link: "https://www.proxmox.com/en/"},
    { name: "Ory Kratos", url: oryKratos, alt: "Ory Kratos", link: "https://www.ory.sh/kratos/"},
    { name: "Keycloak", url: keycloak, alt: "Keycloak", link: "https://www.keycloak.org/"},
    { name: "Drone", url: drone, alt: "Drone", link: "https://www.drone.io/"},
    { name: "MongoDB", url: mongodb, alt: "MongoDB", link: "https://www.mongodb.com/"},
    { name: "EMQX", url: emqx, alt: "EMQX", link: "https://www.emqx.io/"},
    { name: "Zitadel", url: zitadel, alt: "Zitadel", link: "https://zitadel.com/"},
]

// Level 1 Images
import kubernetes from "$lib/images/technologies/kubernetes.svg"
import prometheus from "$lib/images/technologies/prometheus.svg"
import grafana from "$lib/images/technologies/grafana.png"
import loki from "$lib/images/technologies/loki.png"
import robusta from "$lib/images/technologies/Robusta.svg"
// import alertManager from "$lib/images/technologies/pr"
import fluxCD from "$lib/images/technologies/fluxcd.png"
import helm from "$lib/images/technologies/helm.svg"
import postgresql from "$lib/images/technologies/postgresql-icon.svg"
import go from "$lib/images/technologies/go.png"
import laravel from "$lib/images/technologies/laravel.png"
import python from "$lib/images/technologies/python.png"
import bootstrap from "$lib/images/technologies/bootstrap.png"
import javascript from "$lib/images/technologies/js.png"
import vue from "$lib/images/technologies/vuejs.png"

// 14
export const level1 = [
    { name: "Kubernetes", url: kubernetes, alt: "Kubernetes", link: "https://kubernetes.io/" },
    { name: "Prometheus", url: prometheus, alt: "Prometheus", link: "https://prometheus.io/"},
    { name: "Grafana", url: grafana, alt: "Grafana", link: "https://grafana.com/grafana/"},
    { name: "Loki", url: loki, alt: "Loki", link: "https://grafana.com/products/cloud/logs/"},
    { name: "VueJs", url: vue, alt: "Vue js", link: "https://vuejs.org/"},
    { name: "Helm", url: helm, alt: "Helm", link: "https://helm.sh"},
    { name: "Postgresql", url: postgresql, alt: "Postgresql", link: "https://www.postgresql.org/"},
    { name: "Go", url: go, alt: "Go", link: "https://go.dev/"},
    { name: "Laravel", url: laravel, alt: "Laravel", link: "https://laravel.com/"},
    { name: "Python", url: python, alt: "Python", link: "https://www.python.org/"},
    { name: "Bootstrap", url: bootstrap, alt: "Bootstrap", link: "https://getbootstrap.com/"},
    { name: "JavaScript", url: javascript, alt: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    { name: "Robusta", url: robusta, alt: "Robusta", link: "https://home.robusta.dev/"},
    { name: "Flux CD", url: fluxCD, alt: "Flux CD", link: "https://fluxcd.io/"},
]